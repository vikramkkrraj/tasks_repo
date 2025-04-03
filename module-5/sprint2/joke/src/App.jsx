import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [joke, setJoke] = useState({setup : "", punch : ""});

  const fetchJoke = async () => {
     try {
       const res = await fetch("https://official-joke-api.appspot.com/random_joke");
       const data = await res.json();
      //  console.log(data);
       setJoke ( {setup : data.setup, punch: data.punchline});
       console.log(joke);
     } catch (error) {
      console.log(error);
     }
  };

  useEffect (() => {
     fetchJoke();
  },[])

  
  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          // backgroundColor: "aquamarine",
          flexDirection: "column",
          padding : "10px",
          borderRadius : "10px"
        }}
      >
        <h1>{joke.setup }</h1>
        <h1>{joke.punch}</h1>
      </div>
      <button onClick={fetchJoke} style={{ marginTop : "10px", backgroundColor : 'blueviolet'}}>Random Joke</button>
    </> 
  );
}

export default App;
