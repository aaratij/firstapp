import React from "react";

import Bag from "./Bag.js";
import Apples from "./Apples";
import Pears from "./Pears";

function Trunk() {
    return (
        <div>
            <Bag>
                <Apples color="yellow" number="10"/>
                <Pears friend="Martin"/>
            </Bag> 
        </div>
    )
}

export default Trunk;