const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    description:{
        type:String,
        required:[true,'please enter product description']
    },
    images :{
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String, 
                required:true 
            }
        },
    category:{
        type:String,
        default:""
    },
    authorname:{
        type:String,
    },
    type:{
        type:String,
        required:[true,"enter the type of data"]
    },
    createdAt : {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Book',bookSchema);