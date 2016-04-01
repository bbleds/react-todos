"use strict";

// ------------ dependencies
const express = require("express");
const router = express.Router();

// controllers
const tasksCtrl = require("../controllers/tasksCtrl");

// default route
router.get("/", (req, res) => {
  res.send("hey");
});

// api routes
router.get("/tasks", tasksCtrl.getTasks);
router.post("/tasks", tasksCtrl.saveTasks);


module.exports = router;
