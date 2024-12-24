import { React, useState } from "react";
const News = () => {
  const [news, setNews] = useState();
  const [data, setData] = useState();

  const fetchApi = () => {
    let url = `https://newsapi.org/v2/everything?q=Apple&apiKey=097dd625635b408bb7245370fffa26dc`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <div className="newsContent">
        <h2>{data.author}</h2>
      </div>
    </div>
  );
};

export default News;
