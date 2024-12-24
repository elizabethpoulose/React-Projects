import { React, useState } from "react";
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

  ".form-content": {
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

  ".form-control": {
    marginTop: "10px",
    marginBottom: "10px",
  },

  ".form-col": {
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

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [user, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const sign = (e) => {
    e.preventDefault();
    if (email && user && password) {
      setUser(user);
      localStorage.setItem("username", user);
      navigate("/welcome");
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div className="container form-content" style={styles[".form-content"]}>
      <form className="row justify-content-center" onSubmit={sign} style={styles.form}>
        <div className="col form-col" style={styles[".form-col"]}>
          <h2 style={styles.h2}>Sign Up</h2>
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
              style={styles[".form-control"]}
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
              style={styles[".form-control"]}
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
              style={styles[".form-control"]}
            />
          </div>
          <button className="btn btn-danger mt-2" type="submit" style={styles.button}>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
