// import React from "react";
// import $ from "jquery";
//
// // pages/components
// import Header from "./pages/Header";
// import Main from "./pages/Main";
//
//
// export default class Layout extends React.Component {
//   componentDidMount() {
//     this.serverRequest = $.get("http://jsonplaceholder.typicode.com/posts/1",function(data){
//       console.log(this);
//     })
//   }
//
//   render(){
//   // get data
//     return(
//       <div>
//         <Header />
//         <div id="spacer"></div>
//         <Main />
//       </div>
//     );
//   }
// }

import React from "react";
// // pages/components
import Header from "./pages/Header";
import Main from "./pages/Main";

const Layout = React.createClass({
  render: function() {
    const data = [{task: "take out yo trashy trash", completed: false},{task: "dont be a debbie downer", completed: true}]
    return (
      <div>
       <Header />
       <div id="spacer"></div>
       <Main testData={data}/>
     </div>
    );
  }
});

module.exports = Layout;
