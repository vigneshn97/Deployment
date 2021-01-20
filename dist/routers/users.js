const express = require("express");

const User = require("../modals/User");

const Userservices = require("../services/user");

const router = new express.Router();
router.post("/users", Userservices.postUsers);
router.delete("/users/del", Userservices.deleteUsers);
router.get("/users/all", Userservices.getUsers);
module.exports = router;