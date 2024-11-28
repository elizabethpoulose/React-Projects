import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Component() {
  const [isSwitch, setSwitch] = useState(false);

  function handleChange(e) {
    const { checked } = e.target;
    setSwitch(checked);
  }

  return (
    <div
      style={{
        backgroundColor: isSwitch ? "white" : "black",
        color: isSwitch ? "black" : "white",
      }}
    >
      <div className="form-check form-switch">
        <input
          style={{
            backgroundColor: isSwitch ? "black" : "white",
            border: "none",
            boxShadow: "none",
          }}
          className="form-check-input switch"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isSwitch}
          onChange={handleChange}
        />
        <p>Switch is {isSwitch ? "on" : "off"}</p>
      </div>
    </div>
  );
}

export default Component;
