import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {

  render(){
    return(
      <div id="main-wrap">
        <div id="add-task-container" class="container-fluid">
          <div class="row">
            <h1 class="col-md-12">Add New To Dos</h1>
            <input class="form-control" />
            <button class="btn btn-success">Add Task</button>
        </div>
          <hr/>
          <div class="row">
            <h1 class="col-md-12">Current To Dos</h1>
          </div>
        </div>
      </div>
    );
  }
}
