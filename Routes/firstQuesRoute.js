//QUESTION 1 ROUTE

const express = require('express');
const firstUser = require('../Controllers/firstQuesCtrl');

const router1 = express.Router();

router1.post("/user1", firstUser);

module.exports = router1;