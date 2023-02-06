import React, { useState } from "react";
import NasaPhoto from "./NasaPhoto";
import "../style.css"

const Description = (props) => {
    const [description, setDescription] = useState()
    const [toggle, setToggle] = useState(false)
    function myFunction(e) {
        e.preventDefault()
        const element = document.getElementById("style");
        element.classList.toggle("description");
        setDescription(props.explanation)
        console.log('click')
    }
    
    return(
        <div>
            <p id="style">{description}</p>
            <button onClick={myFunction}>Description</button>
        </div>
    )
    
}

export default Description