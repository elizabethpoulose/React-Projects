import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const handleClick = () => {
    const url = `https://api.unsplash.com/search/photos?query=${search}&client_id=${accessKey}`;

    fetch(url, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Photo not found");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data.results);
        setError("");
      })
      .catch((e) => {
        console.error(e);
        setError("Photo not found");
      });
  };

  return (
    <div className="container-fluid">
      <div
        className="row sticky-top bg-light py-3"
        style={{ zIndex: 1000, borderBottom: "1px solid #ccc" }}
      >
        <div className="col-12 d-flex justify-content-center">
          <input
            type="text"
            placeholder="Search Photos"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control w-50 me-2"
            id="search"
            style={{ borderRadius: "25px" }}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Search
          </button>
        </div>
        {error && (
          <div className="col-12 mt-3">
            <h5 className="text-center bg-danger text-white py-2 rounded">
              {error}
            </h5>
          </div>
        )}
      </div>

      <div
        className="row g-4 mt-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {photos && photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div
                className="card"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  className="card-img-top"
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No photos to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
