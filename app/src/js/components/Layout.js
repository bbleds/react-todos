// dependencies
import React from "react";
// pages/components
import Header from "./pages/Header";
import Main from "./pages/Main";

const Layout = React.createClass({
  render: function() {
    return (
      <div>
       <Header />
       <div id="spacer"></div>
       <Main/>
     </div>
    );
  }
});

module.exports = Layout;
