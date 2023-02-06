import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";
import styled from "styled-components";


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=yYMqIAbX95kI5IbcrRiE117hzWgOwvGf9Q6RNPaB")
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  const StyledDiv = styled.div`
  background-color: lemonchiffon;
  color: green;
`;

  return (
    <StyledDiv>
      <div className="App">
        { data && <NasaPhoto photo={data}/>}
      </div>
    </StyledDiv>
  );
  
}

export default App;