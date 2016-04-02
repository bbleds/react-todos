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
    console.log(req.body);
    // const taskToAdd = new Task(
    //   {
    //     taskName: "Example Task Two",
    //     completed: false
    //   });
    //
    //   taskToAdd.save((err, objectGiven) => {
    //     if (err) throw err;
    //     res.send("success")
    //   })
  }
};

module.exports = exportsObject;
