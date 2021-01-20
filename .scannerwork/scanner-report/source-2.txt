const express = require("express");
const User = require("../modals/User");

exports.getUsers = async function (req, res, next) {
  try {
    var user = await User.find();
    res.send(user);
    
  } catch (e) {
   res.send({ message: e.message })
  }
};

exports.postUsers = async function (req, res, next) {
  try {
    const user = new User.create(req, res, next);
    res.status(201).send({ user })
    /* istanbul ignore next */
  } catch (e) {
    res.send({ message: e.message })
  }
};

exports.deleteUsers = async function (req, res, next) {
  try {
    const user = await User.deleteOne({ name: req.body.name })
    res.send({ user })
    /* istanbul ignore next */
  } catch (e) {
    res.send({ message: e.message })
  }
};