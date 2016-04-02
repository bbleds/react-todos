"use strict";

// ---------------- models
const Task = require("../models/task");

// ---------------- export methods
const exportsObject = {
  getTasks: (req, res) => {
    Task.find({}, (err, tasks)=>{
      if(err) throw err;
      res.send(tasks);
    });
  },
  saveTasks: (req, res) => {
    const taskToAdd = new Task(
      {
        taskName: req.body.taskName,
        completed: false
      });
      taskToAdd.save((err, objectGiven) => {
        if (err) throw err;
        res.send(objectGiven);
      });
  },
  updateTasks: (req, res) => {
    Task.findByIdAndUpdate(req.body.itemId, {completed: true}, (err, objectUpdated) => {
      if (err) throw err;
      res.send(objectUpdated);
    });
  }
};

module.exports = exportsObject;
