import React from "react";
import {Link} from "react-router";

const Main = React.createClass({
  addTask: function(e){
    const taskName = e.target.parentNode.childNodes[1].value;
    e.target.parentNode.childNodes[1].value = "";
    this.props.testData.push({task: taskName, completed: false});
    this.forceUpdate();
  },
  completeTask: function(e){
    console.log(this);
    console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode));
  },
  render: function() {
    // Repeat Li for every uncompleted task
    const dataTasks = this.props.testData.map((taskItem)=>{
      if(!taskItem.completed){
        return(
          <li key={taskItem.task} class="col-md-12">
            {taskItem.task}
            <button class="btn btn-primary" onClick={this.completeTask}>Completed</button>
          </li>
        )
      }
    });
    // return li for every completed task
    const completedTasks = this.props.testData.map((taskItem)=>{
      if(taskItem.completed){
        return(
          <li key={taskItem.task} class="col-md-12">
            {taskItem.task}
            <button class="btn btn-danger" onClick={this.completeTask}>Delete</button>
          </li>
        )
      }
    });
    // main component
    return (
      <div id="main-wrap">
        <div id="add-task-container" class="container-fluid">
          <div class="row">
            <h1 class="col-md-12">Add New To Dos</h1>
            <input class="form-control" />
            <button class="btn btn-success" onClick={this.addTask}>Add Task</button>
        </div>
          <hr/>
          <div class="row">
            <h1 class="col-md-12">Current To Dos</h1>
            {dataTasks}
          </div>
          <hr/>
          <div class="row">
            <h1 class="col-md-12">Completed To Dos</h1>
            {completedTasks}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
