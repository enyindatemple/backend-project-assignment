const mongoose = require('mongoose');

const secondUserScheme = mongoose.Schema({
    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    userName: {
        type: String,
        require: [true, "Please enter a username!"]
    },

    password: {
        type: String,
        require: [true, "Enter a password!"]
    }
});

const USERS2 = mongoose.model("secondUsers", secondUserScheme);

module.exports = USERS2;