const USERS2 = require("../Models/userModel2");
const bcrypt = require('bcrypt');


const users2 = {
    createNewUser : async(req, res)=>{
        try{
            const {firstName, latsName, userName, password, cf_password} = req.body;

            const alreadyAUser = await USERS2.findOne({userName: userName});

            if(alreadyAUser) return res.json({msg: "You are already a user!"});

            if(password !== cf_password) return res.json({msg: "Password not match!"});

            const hashedPassword = await bcrypt.hash(password, 14);

            const newUser = new USERS2({firstName, latsName, userName, password: hashedPassword});

            await newUser.save();

            return res.status(200).json({
                newUser,
                msg: "User creation successfull!"
            });
        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    getAllUsers: async(req, res)=>{
        try{
            const allUsers = await USERS2.find();

            if(!allUsers) return res.json({msg: "No user yet!"});

            return res.status(200).json({
                allUsers,
                msg: "All user request successfull!"
            });
        }catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    getUser: async(req, res)=>{
        try{
            const {id} = req.params;

            const user = USERS2.findById(id);

            if(!user) return res.json({msg: "User not found!"});

            return res.status(200).json({
                user,
                msg: "User request successfull!"
            });
        }catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    updateUser: async(req, res)=>{
        try{
            const {id} = req.params;

            const {firstName, latsName, password} = req.body;

            const user = await USERS2.findById(id);

            if(!user) return res.json({msg: "User not found!"});

            const updatedUser = await USERS2.findByIdAndUpdate({firstName, latsName, password});

            return res.status(200).json({
                updatedUser,
                msg: "User updated successfully!"
            });
        }catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    deleteUser: async(req, res)=>{
        try{
            const {id} = req.params;
            
            const user = await USERS2.findById(id);

            await USERS2.findByIdAndDelete(user);

            return res.status(200).json({msg: "User deleted successfully!"});
        }catch(error){
            return res.status(500).json({msg: error.message});
        };
    }
};

module.exports = users2;