import React from "react";
import {Link} from "react-router";

export default class Header extends React.Component {

  render(){
    return(
      <div class="container-fluid">
        <div class="row">
          <h1 class="col-md-12">Current To Dos</h1>
        </div>
      </div>
    );
  }
}
