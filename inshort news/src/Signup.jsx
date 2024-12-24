import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [user, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const sign = (e) => {
    e.preventDefault();
    if (email && user && password) {
    //   console.log(user);
        setUser(user);
      localStorage.setItem("username", user);
      navigate("/welcome");
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div className="container form-content">
      <form className="row justify-content-center" onSubmit={sign}>
        <div className="col form-col">
          <h2>Sign Up</h2>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
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
          <button className="btn btn-danger mt-2" type="submit">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
