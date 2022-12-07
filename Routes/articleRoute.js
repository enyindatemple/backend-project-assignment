const express = require('express');
const articleCtrl = require('../Controllers/articleCtrl');

const router3 = express.Router();

router3.post("/articles", articleCtrl.addNewArticle);

router3.get("/articles", articleCtrl.getAllArticle);

router3.get("/articles/:id", articleCtrl.getOneArticle);

router3.patch("/articles/:id", articleCtrl.updateArticle);

router3.delete("/articles/:id", articleCtrl.deleteArticle);


module.exports = router3;