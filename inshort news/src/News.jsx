import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const News = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=097dd625635b408bb7245370fffa26dc&language=en`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.articles))
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = data?.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12">
          <div className="newsContent">
            <div className="search mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search Articles"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "20px" }}
              />
            </div>
            {filteredArticles && filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div key={index} className="mb-4">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "15px",
                      }}
                    />
                  )}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {article.title}
                  </h3>
                  <h5
                    style={{
                      fontSize: "1rem",
                      color: "#666",
                      fontStyle: "italic",
                    }}
                  >
                    {article.source?.name}
                  </h5>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "0.9rem",
                      marginBottom: "10px",
                    }}
                  >
                    {article.author || "Unknown Author"}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#555",
                      marginBottom: "15px",
                    }}
                  >
                    {article.description}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "5px",
                      fontSize: "1rem",
                    }}
                  >
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
