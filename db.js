const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const URL = `${process.env.MONGODB_URL}`;

const connectDB = async(req, res)=>{
    try{
        await mongoose.connect(URL, ()=> console.log("Database connected succefully...!"));
    } catch(error){
        return res.status(500).json({msg: error.message});
    };
};

module.exports = connectDB;