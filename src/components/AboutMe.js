import React from "react";
import ReactPlayer from "react-player/youtube";

function AboutMe() {

    const aboutLittleLemon = false;
  
    return (
        <div>
        aboutLittleLemon
        ? <h1>About Me</h1> 
        : <h1>About Little Lemon</h1>
        </div>
    )
}

export default AboutMe;