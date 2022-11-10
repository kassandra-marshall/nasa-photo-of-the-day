import React, { useState } from "react";
import NasaPhoto from "./NasaPhoto";
import "../style.css"

const Description = (props) => {
    const [description, setDescription] = useState(props.explanation)
    function myFunction() {
        const element = document.querySelector(".style");
        element.classList.toggle("style");
    }
    
    return(
        <div>
            <p className="style">{description}</p>
            <button onClick={myFunction}>Description</button>
        </div>
    )
    
}

export default Description