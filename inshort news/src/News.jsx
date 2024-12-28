import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const News = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    let url = `https://newsdata.io/api/1/latest?apikey=pub_63224df0ef624779ab8eddf292a215374904e&q=pizza`;


    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setError("Failed to load articles");
        setLoading(false);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = data?.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="newsContent">
            <div><h1 className="">News</h1></div>
            <div className="search mt-5 position-sticky top-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search Articles"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "10px" }}
              />
            </div>

            {loading && <p>Loading news...</p>}
            {error && <p>{error}</p>}

            {filteredArticles && filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div key={index} className="mb-4">
                  {article.image_url && (
                    <img
                      src={article.image_url}
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
                    {article.source_id || "Unknown Source"}
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
                    href={article.link}
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
              <p>No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
