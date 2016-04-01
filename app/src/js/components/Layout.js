import React from "react";

// pages/components
import Header from "./pages/Header";
import Main from "./pages/Main";


export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div id="spacer"></div>
        <Main />
      </div>
    );
  }
}
