import React, { useState } from "react";

const Component = () => {
  const [joke, setJoke] = useState("");

  let url = "https://icanhazdadjoke.com/";

  const fetchApi = () => {
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((error) => console.error("Error fetching joke:", error));
  };
  return (
    <div className="container">
      <div className="content">
        <h1>Joke Generator</h1>
        <p className="text">{joke}</p>
        <button className="btn" onClick={fetchApi}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Component;
