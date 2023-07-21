const mongoose=  require("mongoose");

const AddSchema =new mongoose.Schema({

    
    id : {
        type : String
    },
    cotegory : {
        
        type: String,
        ref: "categories"
    },
    user : {
        type : String,
        ref : "users"
    },
    
    title : {
        type : String
    },
    
    description : {
        type : String
    },
    
    price : {
        type : String
    },
    images : {
        type : Object
    },
    thumbnail : {
        type : String
    },
    
    publish_at : {
        type : String
    },
    created_at: {
        type : String
    },
    updated_at: {
        type : String
    },
    is_stock: {
        type : String
    },
    status : {
        type : Number,
        default : 1
    }

    
    
    })


    
    
const AddModel= mongoose.model("Addproduct",AddSchema);

module.exports = AddModel;





