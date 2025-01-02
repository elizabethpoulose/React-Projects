import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )} ${meridiem}`;
  }

  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="container py-5" style={{ marginTop: "160px" }}>
      <div className="row border rounded shadow-lg bg-light py-4">
        <h1 className="text-center w-100 mb-4">Digital Clock</h1>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <h1 className="display-1 fw-bold text-danger">{getTime()}</h1>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
