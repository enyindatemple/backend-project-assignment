//QUESTION 1 CONTROLLER

const USERS = require("../Models/userModel");
const bcrypt = require('bcrypt');

const firstUser = async(req, res) =>{
    try{
        const {firstName, lastName, address, email, password, cf_password} = req.body;

        if(password !== cf_password) return res.status(400).json({msg: "Confirm password not equal to password!"});
        
        const hashedPassword = await bcrypt.hash(password, 13);

        const user = new USERS({firstName, lastName, address, email, password: hashedPassword});

        await user.save();

        return res.status(201).json({msg: "Account created!"});
        
    }catch(error){
        return res.status(500).json({msg: error.message});
    }
};

module.exports = firstUser;