import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";
import styled from "styled-components";


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  const StyledDiv = styled.div`
  background-color: red;
  color: white;
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