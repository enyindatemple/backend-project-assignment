const express = require('express');
const connectDB = require('./db');
const routes = require('./Routes');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 9090;

connectDB();

app.use("/api", routes);

//Test Route
app.get('/', (req, res)=> res.status(200).json({msg: 'Welcome to the backend!'}))

app.listen(PORT, ()=> console.log(`Server started listening on ${PORT}...!`));