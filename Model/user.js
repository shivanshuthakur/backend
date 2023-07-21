const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema ({

    

    email: {
        type : String
    },
    mobile: {
        type : String
    },

    password: {
        type : String
    },
    status:{
        type:Number,
        default:1
    }


});

const User = mongoose.model("users",UserSchema)
module.exports = User;