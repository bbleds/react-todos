import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {
  render(){
    return(
      <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand">React To Do</a>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <a>To Dos</a>
            </li>
            <li>
              <a>Add</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}
