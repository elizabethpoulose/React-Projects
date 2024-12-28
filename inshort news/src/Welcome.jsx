import React from "react";
import { useNavigate } from "react-router-dom";

const Component = ({ username }) => {
  const navigate = useNavigate();

  const button = () => {
    navigate("/mainpage");
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      marginTop: "250px",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
    button: {
      // width: "100%",
      padding: "10px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Hello {username} <br />
        Welcome to <br /> NewSpot
      </h1>
      <button
        style={styles.button}
        onClick={button}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        News
      </button>
    </div>
  );
};

export default Component;
