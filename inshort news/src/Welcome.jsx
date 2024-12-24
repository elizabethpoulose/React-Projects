import React from "react";
import { useNavigate } from "react-router-dom";
const Component = ({ username }) => {
  const navigate = useNavigate();

  const button = () => {
    navigate("/News");
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {username} <br></br>Welcome to<br></br> NewSpot
      </h1>
      <button className="btn btn-primary" onClick={button}>
        News
      </button>
    </div>
  );
};

export default Component;
