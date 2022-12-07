const express = require('express');
const users2 = require('../Controllers/fourtQuesCtrl');

const router4 = express.Router();

router4.post("/auth/login", users2.createNewUser);

router4.get("/users", users2.getAllUsers);

router4.get("/users/:id", users2.getUser);

router4.put("/users/:id", users2.updateUser);

router4.delete("/users/:id", users2.deleteUser);

module.exports = router4;