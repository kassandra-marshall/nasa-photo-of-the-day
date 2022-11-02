import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";

// const dummyData = {
//   date: "2022-11-02",
//   explanation: "Watch for three things in this unusual eclipse video.  First, watch for a big dark circle to approach from the right to block out more and more of the Sun. This dark circle is the Moon, and the video was made primarily to capture this partial solar eclipse last week. Next, watch a large solar prominence hover and shimmer over the Sun's edge. A close look will show that part of it is actually falling back to the Sun. The prominence is made of hot plasma that is temporarily held aloft by the Sun's changing magnetic field. Finally, watch the Sun's edge waver. What is wavering is a dynamic carpet of hot gas tubes rising and falling through the Sun's chromosphere -- tubes known as spicules. The entire 4-second time-lapse video covers a time of about ten minutes, although the Sun itself is expected to last another 5 billion years.   Partial Solar Eclipse in October 2022: Notable Submissions to APOD",
//   title:"A Partial Eclipse of an Active Sun",
//   url:"https://www.youtube.com/embed/7dh5VL5YGoA?rel=0"
// }

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  })
  
  return (
    <div className="App">
      { data && <NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;