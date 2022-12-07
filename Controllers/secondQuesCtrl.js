//QUESTION 2 CONTROLLER

const USERS = require("../Models/userModel");
const bcrypt = require('bcrypt');

const users = {
    register: async(req, res)=>{
        try{
            const {firstName, lastName, email, password, cf_password, address} = req.body;

            if(password !== cf_password) return res.json({msg: "Passwords does not match!"});

            const alreadyExist = await USERS.findOne({email: email});

            if(alreadyExist) return res.json({msg: "This user already exist..."});

            const hashedPassword = await bcrypt.hash(password, 13);

            const newUser = new USERS({firstName, lastName, email, password: hashedPassword, address});

            await newUser.save();

            return res.status(200).json({
                newUser,
                msg: "User registered successfull!"
            });

        }catch(error){
            return res.status(500).json({msg: error.message});
        }
    },

    login: async(req, res)=>{
        try{
            const {email, password} = req.body;
            const user = await USERS.find({email: req.body.email, password: req.body.password});

            if(user) return res.status(200).json({msg: "User logged in successfully!"});
            
        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    }
};


module.exports = users;