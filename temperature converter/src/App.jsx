import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelcius = (e) => {
    const c = parseFloat(e.currentTarget.value) || 0;
    setCelcius(c);
    setFahrenheit((c * 9) / 5 + 32);
  };

  const handleFahrenheit = (e) => {
    const f = parseFloat(e.currentTarget.value) || 0;
    setFahrenheit(f);
    setCelcius(((f - 32) * 5) / 9);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row col-lg-6 col-md-8 col-sm-10">
        <div className="d-flex flex-column align-items-center gap-3 p-4 shadow rounded bg-light">
          <h3 className="text-center">Temperature Converter</h3>
          <div className="w-100">
            <label htmlFor="celcius" className="form-label">
              Celcius
            </label>
            <input
              id="celcius"
              type="number"
              placeholder="Enter Celcius"
              className="form-control"
              value={celcius}
              onChange={handleCelcius}
            />
          </div>
          <div className="w-100">
            <label htmlFor="fahrenheit" className="form-label">
              Fahrenheit
            </label>
            <input
              id="fahrenheit"
              type="number"
              placeholder="Enter Fahrenheit"
              className="form-control"
              value={fahrenheit}
              onChange={handleFahrenheit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
