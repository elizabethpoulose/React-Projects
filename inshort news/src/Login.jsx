import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "form-content": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  form: {
    background: "rgba(255, 255, 255, 0.50)",
    borderRadius: "8px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
    padding: "10px",
  },
  formControl: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  formCol: {
    flex: "8 3 3%",
    margin: "40px 0px",
  },
  h2: {
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    marginTop: "10px",
  },
};

const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      // console.log("Login Successful");
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
    <div className="container form-content" style={styles["form-content"]}>
      <form className="row justify-content-center" style={styles.form}>
        <div className="col form-col" style={styles.formCol}>
          <div className="form-group">
            <h2 style={styles.h2}>NewSpot</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
              style={styles.formControl}
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
              style={styles.formControl}
            />
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={submit}
            style={styles.button}
          >
            Login
          </button>
          <button
            className="btn btn-danger mt-2"
            onClick={signUp}
            style={styles.button}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
