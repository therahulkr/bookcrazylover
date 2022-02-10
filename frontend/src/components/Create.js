import React ,{ Fragment, useState, useEffect }from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { createBook,clearErrors, deleteBook,updateBook } from '../actions/bookAction';
import "./create.css"

const categories = [
    "fiction",
    "non-fiction",
    "novel",
  ];

const Create = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector((state) => state.newbook);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [password, setPass] = useState("");
    const [images, setImages] = useState();
    const [id, setId] = useState();


    const updateProfileDataChange = (e) => {
        if (e.target.name === "images") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setImages(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
        } 
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          alert.success("Product Created Successfully");
        }
      }, [ dispatch,alert,error,success]);

    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("type", type);
        myForm.set("password",password)
        myForm.set("images", images);
      console.log('ab hojaegi send')
        dispatch(createBook(myForm));
      };
    const deleteProductSubmitHandler  = (e)=>{
      e.preventDefault();

      dispatch(deleteBook(id,password));
    }
    const updateProductSubmitHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("id",id);
      myForm.set("name", name);
      myForm.set("description", description);
      myForm.set("category", category);
      myForm.set("type", type);
      myForm.set("password",password)
      myForm.set("images", images);

      dispatch(updateBook(myForm));
    };

  return (<Fragment>
            <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Anything</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="*Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="*select type blog/book/author make sure "
                required
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="*enter the password"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="*book/author/blog Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <input
                type="text"
                placeholder="in case of book only select category fiction/non-fiction/novel make sure "
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div id="createProductFormImage">*
                   <input
                    type="file"
                    name="images"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
            </div>
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>          </form>
        </div>
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Update Anything</h1>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="*Enter the id of the object to be update"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="*book/author/blog Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="*select type blog/book/author make sure "
                required
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="*enter the password"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="*book/author/blog Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <input
                type="text"
                placeholder="in case of book only select category fiction/non-fiction/novel make sure "
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div id="createProductFormImage">*
                   <input
                    type="file"
                    name="images"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
            </div>
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>          </form>
        </div>
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={deleteProductSubmitHandler}
          >
            <h1>Delete Anything</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="*Enter the id of the object to be deleted"
                required
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="*enter the password"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Delete
            </Button>          
            </form>
        </div>
  </Fragment>
    
  )
}

export default Create