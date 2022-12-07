//QUESTION 3 CONTROLLER

const Article = require("../Models/articleModel");

const articleCtrl = {
    addNewArticle: async(req, res)=>{
        try{
            const { title, body, author, authorPhoneNumber, authorAddress } = req.body;

            const newArticle = new Article({title, body, author, authorPhoneNumber, authorAddress});

            await newArticle.save();

            return res.status(200).json({msg: "Article saved successfully!"});

        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    getOneArticle: async(req, res)=>{
        try{
            const {id} = req.params;

            const article = await Article.findById(id);

            if(!article) return res.status(400).json({msg: "This artcile does not exist"});

            return res.status(200).json({
                article,
                msg: "Article request successfull!"
            });

        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    getAllArticle: async(req, res)=>{
        try{
            const allArticle = await Article.find();

            if(!allArticle) return res.status(400).json({msg: "No artcile added yet"});

            return res.status(200).json({
                allArticle,
                msg: "All article request successfull!"
            });

        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    updateArticle: async(req, res)=>{
        try{
            const id = req.params.id;
            const trimed_id = id.trim();

            let article = await Article.findById(trimed_id);

            const {title, body, authorPhoneNumber, authorAddress} =req.body;

            article = await Article.findByIdAndUpdate({title, body, authorPhoneNumber, authorAddress});

            return res.json({
                article,
                msg: "Article updated successfully!"
            });
        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    },

    deleteArticle: async(req, res)=>{
        try{
            const {id} = req.params;

            const article = await Article.findById(id);

            if(article) await Article.findOneAndDelete(article);

            return res.status(200).json({msg: "Article deleted successfully!"});

        } catch(error){
            return res.status(500).json({msg: error.message});
        };
    }
};

module.exports = articleCtrl;