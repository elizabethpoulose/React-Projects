import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Component.css"; // Import external CSS

const Component = () => {
  const [count, setCount] = useState(0);

  function decCount() {
    setCount(count - 1);
  }

  function incCount() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container text-center shadow">
      <h1 className="counter-value">{count}</h1>
      <div>
        <button className="btn btn-danger m-2" onClick={decCount}>
          Decrement
        </button>
        <button className="btn btn-warning m-2" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-success m-2" onClick={incCount}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Component;
