import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    let url = `https://quickchart.io/qr?text=${encodeURIComponent(text)}`;

    setError(null);
    setData(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate QR code");
        }
        setData(url);
      })
      .catch((e) => setError("Something went wrong"));
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row border shadow p-4 w-40">
        <div className="col d-flex align-items-center justify-content-center flex-column gap-3">
          <h1 className="text-center">QR Code Generator</h1>
          <input
            type="text"
            placeholder="Enter Text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={handleChange}
            // disabled={!text.trim()}
          >
            Generate
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
          {data && (
            <img
              src={data}
              alt="Generated QR Code"
              className="img-fluid mt-3"
              style={{ maxWidth: "300px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
