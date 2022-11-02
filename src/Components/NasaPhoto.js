import React from "react";

const NasaPhoto = (props) => {
    return (
        <div className="Photo-wrapper">
            <h3>{props.photo.date}</h3>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.url}/>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;