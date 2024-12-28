import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Country = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const url = `https://restcountries.com/v3.1/name/${search}`;

    fetch(url, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError("");
      })
      .catch((e) => {
        console.error("Error fetching data:", e);
        setError("Error fetching data. Please try again.");
        setData([]);
      });
  };

  const formatCurrencies = (currencies) => {
    if (!currencies) return "N/A";
    return Object.values(currencies)
      .map((currency) => `${currency.name} (${currency.symbol || "N/A"})`)
      .join(", ");
  };

  const formatLanguages = (languages) => {
    if (!languages) return "N/A";
    return Object.values(languages).join(", ");
  };

  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-2 text-muted">Country Information</h1>
          <div className="input-group my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Country"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="country"
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {error && <h2 className="text-danger mt-3">{error}</h2>}
          <div className="mt-4">
            {data &&
              data.length > 0 &&
              data.map((country, index) => (
                <div key={index} className="card my-3 shadow">
                  <div className="card-body">
                    <h3 className="card-title">{country.name.common}</h3>
                    <p className="card-text">
                      <strong>Capital:</strong>{" "}
                      {country.capital ? country.capital[0] : "N/A"}
                      <br />
                      <strong className="text-start">Region:</strong>{" "}
                      {country.region}
                      <br />
                      <strong className="text-start">Population:</strong>{" "}
                      {country.population.toLocaleString()}
                      <br />
                      <strong className="text-start">Currency:</strong>{" "}
                      {formatCurrencies(country.currencies)}
                      <br />
                      <strong className="text-start">Languages:</strong>{" "}
                      {formatLanguages(country.languages)}
                    </p>
                    {country.flags && (
                      <img
                        src={country.flags.svg}
                        alt={`${country.name.common} flag`}
                        className="img-fluid mt-3"
                        style={{ maxWidth: "150px", height: "auto" }}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
