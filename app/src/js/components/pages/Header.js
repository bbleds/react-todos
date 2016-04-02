import React from "react";

const Header = React.createClass({
  render(){
    return(
      <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand">React To Do</a>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Header;
