import React from "react";
import Description from "./Description";
import styled from "styled-components";

const NasaPhoto = (props) => {
    const StyledImg = styled.div`
        height: 100vh;
    `
    return (
        <StyledImg>
            <div className="Photo-wrapper">
                
                        <h3>{props.photo.date}</h3>
                        <h2>{props.photo.title}</h2>
                        < Description explanation={props.photo.explanation}/>
                        <img src={props.photo.url} alt="NASA"/>
            </div>
        </StyledImg>
    )
}

export default NasaPhoto;