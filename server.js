const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 5000;
const mongoose = require('mongoose');
const User = require('./Model/user');
const cors = require ("cors");
const bodyparser = require("body-parser");
const Category = require('./Model/Category');
const Product = require('./Model/product');
const Addproduct = require('./Model/Addproduct');
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
const jwt = require ('jsonwebtoken')

mongoose.connect('mongodb://127.0.0.1:27017/acer');


const db = mongoose.connection;
db.on('open',function () {
    console.log('db connected');
})

app.post('/register', async(req,res)=>{
    const data = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        status:1
    })
    data.save();
    return res.json({status:true});
})




app.post('/login',async(req,res)=>{
    const user =await User .findOne(req.body);
    if(!user){
        return res.json({status:false,error:"user not found"});
    }
    const token = jwt.sign(user.toObject(),"loginsuccessfully");
   return res.json ({status:true,msg:"login successfully"  , token:token});
})




app.get('/categories', async (req, res) => {
    const cat= await Category.find({});

    res.json(cat);
});




app.get('/getuser',(req,res) =>{
    if(req && req.headers){
        const user = jwt.verify(req.headers.authorization,"loginapikey");
        res.json(user);
    }
    res.json("not");
});



app.post('/products', async (req, res)=>{
    const product =  await Category.findOneAndUpdate({
        _id: req.body.id
    },
    {
        name:req.body.name,
        image:req.body.image
    });
    return res.json(product);
});


app.post ('/addproducts',(req, res) => {
    const addproduct = new Category(req.body)
    addproduct(save);
});





app.listen(port,host, () => {
    console.log(`server is runnung at http://${host}:${port}/`)
});


