import React from "react";

function ModeToggler (props) {
    let darkModeOn = true;
    let darkMode = "";
    let lightMode = "";
    const [pageMode, setPageMode] = React.useState("choose your mode");

    function handleClick() {
        
        if (darkModeOn == true) {
            darkModeOn = false;
            setPageMode('darkMode is on');
        } else { 
            darkModeOn = true;
            setPageMode('lightMode is on');
        }
    }
    return(
        <div>
            <h1>Mode chosen: {pageMode}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default ModeToggler;