import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchApi(); // Fetch data when component mounts
  }, []);

  const fetchApi = () => {
    let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=097dd625635b408bb7245370fffa26dc&language=en`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json()) // Ensure we return the parsed JSON
      .then((data) => setData(data.articles)) // Assuming the response has an "articles" array
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12">
          <div className="newsContent" style={{marginTop:"745px"}}>
            {data ? (
              data.map((article, index) => (
                <div key={index} className="mb-3">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="img-fluid mb-3"
                    />
                  )}
                  <h3>{article.title}</h3>
                  <h5>{article.source?.name}</h5>
                  <p>{article.author || "Unknown Author"}</p>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              ))
            ) : (
              <p>Loading news...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
