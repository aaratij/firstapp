import React from "react";

function Header(props) {
    console.log(props);
    console.log(props.name);
    return <h1> Hello there indeed you are {props.name} {props.color}</h1>;
}

export default Header;