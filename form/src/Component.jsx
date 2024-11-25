import React, { useState } from "react";
function Component() {
  const [user, setUserInfo] = useState({
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (e, property) => {
    setUserInfo({ ...user, [property]: e.target.value });
  };

  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const Submit = (e) => {
    e.preventDefault();
    console.log(user);
    handleShow();
  };

  const Reset = (e) => {
    e.preventDefault();
    setUserInfo({
      email: "",
      password: "",
      country: "",
    });
  };

  return (
    <div className="content">
      <form className="container">
        <h1>Form</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={user.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e, "password")}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            placeholder="Select Country"
            name="country"
            value={user.country}
            onChange={(e) => handleChange(e, "country")}
            required
          />
        </div>
        <div className="button">
          <button onClick={Submit}>Submit</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Component;
