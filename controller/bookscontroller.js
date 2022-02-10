const Book = require('../models/booksModel');
const ApiFeatures = require('../utils/api_features')
const ErrorHandler = require('../utils/error_handler');
const catchAsync = require('../utils/catchAsync');
const cloudinary = require("cloudinary");



exports.getbooks = catchAsync(async(req,res,next)=>{
    const resultPerPage = 2;
    const bookscount = await Book.countDocuments();

    const apiFeatures = new ApiFeatures(Book.find(),req.query)
    .search()
    .filter();
    // .pagination(resultPerPage);


    const books = await apiFeatures.query;
    return res.status(200).json({
        success:true,
        bookscount,
        resultPerPage,
        books
    })
})

exports.getBookDetails = catchAsync(async(req,res,next)=>{
    const book = await Book.findById(req.params.id);
    if(!book){
        return next(new ErrorHandler("Book not found",404));
    }

    return res.status(200).json({
        success:true,
        book
    })
})

exports.createbook = catchAsync(async(req,res,next)=>{
    const {name,type,description,password,category}=req.body;
    const newbook = {name,type,description};
    if(category!==""){
        newbook.category = category;
    }

    if(password==="rahul123456789")
    {const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
        folder : "avatars",
        width: 150,
        crop: "scale",
      });
    
      const book = await Book.create({ 
          ...newbook,
          images:{
              public_id:myCloud.public_id,
              url:myCloud.secure_url
          }
         } );

    return res.status(200).json({
        success:true,
        message:"it's been created",
        book
    });
}
    else{
        return next(new ErrorHandler("Book not found",404));
    }
})

//Delete Product --> admin

exports.deleteBook = catchAsync(async(req,res,next)=>{
const book = await Book.findById(req.params.id);

    if(!book){
        return next(new ErrorHandler('product not found',404));
    }

     // Deleting Images From Cloudinary
    await cloudinary.v2.uploader.destroy(book.images.public_id);
  
    await book.remove();

    res.status(200).json({
        success:true,
        message:"Book Delete successfully"
    })
})

//update Product --> admin

exports.updateBook = catchAsync(async(req,res,next)=>{
    if(req.body.password==="rahul123456789")
    {
    const book = await Book.findById(req.body.id);
    if(!book){ 
        return next(new ErrorHandler("Book not found",404));
    }
    
    if(req.body.name !== "")
    book.name = req.body.name;
    if(req.body.description !== "")
    book.description = req.body.description;
    if(req.body.category !== "")
    book.category = req.body.category;


    if(req.body.images !== "undefined"){
        const imageId = book.images.public_id;
        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
            folder : "avatars",
            width: 150,
            crop: "scale",
          });

        book.images = {
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
        }
    }
    
    await Book.findByIdAndUpdate(req.body.id,book,{
        new : true,
        runValidators : true,
        useFindAndModify : false,
    })

    res.status(200).json({
        success:true,
    })}else{
        return next(new ErrorHandler("Book not found",404));
    }
})

