import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // console.log(username,password)

  const submit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      console.log("Login Successful");
      navigate("/welcome");
      setUser(username);
    } else {
      window.alert("Invalid Credentials");
    }
  };

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container form-content">
      <form className="row justify-content-center ">
        <div className=" col form-col">
          <div className="form-group">
            <h2>NewSpot</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={submit}>
            Login
          </button>
          <button className="btn btn-danger mt-2" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
