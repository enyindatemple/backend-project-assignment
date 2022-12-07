//QUESTION 3 MODEL

const mongoose = require('mongoose');

const articleScheme = mongoose.Schema({
    title: { 
        type: String, 
        require: [true, "Please add a title to your article"]
    },

    body: {
        type: String,
        require: true
    },

    author: {
        type: String,
        require: true
    },

    authorPhoneNumber: {
        type: Number
    },

    authorsAddress: {
        type: String
    }

}, {timestamp: true});

const Article = mongoose.model("Articles", articleScheme);

module.exports = Article;