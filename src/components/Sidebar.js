import React from "react";


/* 
function Sidebar(props) {
     const sideStyle= {
          background: "lavender",
          width: "calc(30% - 10px)",
          marginLeft: "10px"
     }
     return <h1 style={sideStyle}> Hello Sidebar {props.greet}</h1>;
} */

const Sidebar = props => {
     const sideStyle= {
          background: "grey",
          width: "calc(30% - 10px)",
          marginLeft: "10px"
     }
     return <h1 style={sideStyle}> Hello Sidebar {props.greet}</h1>;
}

export default Sidebar;