import React from "react"
import ReactPlayer from "react-player"


function Media() {
    const vidUrl = "https://youtu.be/Tn6-PIqc4UM?feature=shared";
    const toggle1 = () => {
        if (bird1.paused) {
            bird1.play();
          } else {
            bird1.pause();
          }            
    };
    const toggle2 = () => {
        if (bird2.paused) {
            bird2.play();
          } else {
            bird2.pause();
          }            
    };

    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
      );
    
      const bird2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
      );

  
    return (
        <div>
           
            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
            <br/>
       
          <ReactPlayer url={vidUrl} playing={false}
        volume={0.5}  />
        </div>
    )
}

export default Media;