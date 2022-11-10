import React from "react";
import Description from "./Description";


const NasaPhoto = (props) => {
    return (
        <div className="Photo-wrapper">
            <h3>{props.photo.date}</h3>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.url}/>
            < Description explanation={props.photo.explanation}/>
        </div>
    )
}

export default NasaPhoto;