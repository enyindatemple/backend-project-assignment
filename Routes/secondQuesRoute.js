//QUESTION 2 ROUTE

const express = require('express');
const users = require('../Controllers/secondQuesCtrl');

const router2 = express.Router();

router2.post("/user2", users.register);
router2.post("/user21", users.login);


module.exports = router2;