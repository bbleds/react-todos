"use strict";
const mongoose = require("mongoose");

const taskSchema = mongoose.model("tasks", mongoose.Schema({
	taskName: String,
  completed: Boolean
}));


module.exports = taskSchema;
