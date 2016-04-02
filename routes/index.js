"use strict";

// ------------ dependencies
const express = require("express");
const path = require("path");
const router = express.Router();

// controllers
const tasksCtrl = require("../controllers/tasksCtrl");

// default route
router.get("/", (req, res) => {
  res.sendFile(path.resolve('app/src/index.html'));
});

// api routes
router.get("/tasks", tasksCtrl.getTasks);
router.post("/tasks", tasksCtrl.saveTasks);
router.put("/tasks", tasksCtrl.updateTasks);


module.exports = router;
