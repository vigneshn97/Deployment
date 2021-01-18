const express = require("express");

const User = require("../modals/User");

const router = new express.Router();
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(user);
    res.status(201).send({
      user
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/users/all", async (req, res) => {
  const users = await User.find({});
  res.send({
    users
  });
});
router.delete('/users/del', async (req, res) => {
  try {
    const user = await User.deleteOne({
      name: req.body.name
    });
    res.send({
      user
    });
  } catch (error) {
    res.status(500).send();
  }
});
module.exports = router;