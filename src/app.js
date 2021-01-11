const express = require("express");
const path = require('path')
require("./db/mongoose");
const userRouter = require('./routers/users')

const User = require("./modals/User");

const app = express();

const publicDirectoryPath = path.join(__dirname,'./public')
app.use(express.static(publicDirectoryPath))

app.use(express.json());
app.use(userRouter)

module.exports = app