import { useState } from "react";

const Component = () => {
  const [color, setColor] = useState({
    rgb1: 255,
    rgb2: 255,
    rgb3: 255,
  });

  const colorChange = () => {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    setColor({ rgb1: R, rgb2: G, rgb3: B });
  };
  return (
    <div
      style={{
        backgroundColor: `rgb(${color.rgb1}, ${color.rgb2}, ${color.rgb3})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>
        rgb({color.rgb1},{color.rgb2},{color.rgb3})
      </h1>
      <button
        onClick={colorChange}
        style={{
          padding: "8px",
          fontSize: "20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Color Change
      </button>
    </div>
  );
};

export default Component;
