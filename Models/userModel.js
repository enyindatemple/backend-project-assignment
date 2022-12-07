//QUESTION 1 & 2 MODEL

const mongoose = require('mongoose');


const firstUserScheme = mongoose.Schema({
    firstName:{
        type: String
    },

    lastName:{
        type: String
    },

    address:{
        type: String
    },
    
    email: { 
        type: String, 
        require: [true, "Please enter your email!"]
    },

    password: {
        type: String,
        require: true
    }
}, {timestamps: true});

const USERS = mongoose.model("firstUsers", firstUserScheme);

module.exports = USERS;