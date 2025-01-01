import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFetch = (e) => {
    e.preventDefault();
    const apiKey = `71c508e3878c2eeb9e790d3142e5fc4b`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;

    setError(null);
    setData(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found or network error");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row border rounded shadow-lg p-4 bg-white w-100"
        style={{ maxWidth: "500px" }}
      >
        <div className="col text-center">
          <h1 className="mb-4" style={{ color: "#007bff", fontWeight: "bold" }}>
            Weather App
          </h1>
          <input
            type="text"
            placeholder="Enter city name"
            onChange={handleChange}
            className="form-control mb-3"
            value={search}
            style={{ fontSize: "1.2rem" }}
          />
          <button
            className="btn btn-primary mb-3"
            onClick={handleFetch}
            style={{ fontSize: "1rem" }}
          >
            Search
          </button>

          {error && <div className="alert alert-danger mt-2">{error}</div>}
          {data && (
            <div className="mt-3 text-start">
              <h3 style={{ color: "#343a40", fontWeight: "bold" }}>
                Weather in {data.name}
              </h3>
              <p style={{ color: "#343a40", fontWeight: "bold" }}>
                Country: {data.sys.country}
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                <strong>Temperature:</strong> {data.main.temp}°C
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                <strong>Condition:</strong> {data.weather[0].description}
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                <strong>Wind:</strong> {data.wind.speed} m/hr
              </p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                <strong>Humidity:</strong> {data.main.humidity}%
              </p>
              <p style={{ fontSize: "1.1rem" }}>
                <strong>Time Zone:</strong> {data.timezone}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
