import React from "react";
import _ from "lodash";
import $ from "jquery";

const Main = React.createClass({
  getInitialState: function(){
    return {
      tasks: []
    }
  },
  componentDidMount: function() {
   this.serverRequest = $.get("/tasks", function(result) {
     this.setState({
       tasks: result
     });
   }.bind(this));
 },
  addTask: function(e){
    const taskText = e.target.parentNode.childNodes[1].value;
    e.target.parentNode.childNodes[1].value = "";
    let currentTasks = this.state.tasks;
    currentTasks.push({taskName: taskText, completed: false});
    this.forceUpdate();
  },
  completeTask: function(e){
    let targetText = e.target.parentNode.childNodes[0].textContent;
    let updatedTasks = _.filter(this.state.tasks, (item) =>{
      if(item.taskName === targetText){
        item.completed = true;
        return item;
      } else {
        return item;
      }
    });
    this.setState({
      tasks: updatedTasks
    })
  },
  deleteTask: function(e){
    const taskText = e.target.parentNode.childNodes[0].textContent;
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  },
  render: function() {
    // Repeat Li for every uncompleted task
    const dataTasks = this.state.tasks.map((taskItem, index)=>{
      if(!taskItem.completed){
        return(
          <li key={index} class="col-md-12">
            {taskItem.taskName}
            <button class="btn btn-primary" onClick={this.completeTask}>Completed</button>
          </li>
        )
      }
    });
    // return li for every completed task
    const completedTasks = this.state.tasks.map((taskItem, index)=>{
      if(taskItem.completed){
        return(
          <li key={index} class="col-md-12">
            {taskItem.taskName}
            <button class="btn btn-danger" onClick={this.deleteTask}>Delete</button>
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
          <div id="add-and-remove-tasks">
            <div class="row">
              <h1 class="col-md-12">Current To Dos</h1>
                {dataTasks}
            </div>
            <hr/>
            <div class="row completed">
              <h1 class="col-md-12">Completed To Dos</h1>
                {completedTasks}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
