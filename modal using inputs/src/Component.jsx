import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Component = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const resetValue = () => {
    setName("");
    setPassword("");
  };

  const Submit = (e) => {
    e.preventDefault();
    // console.log(`Name: ${name} and Password: ${password}`);
    setModalOpen(true);

    setTimeout(()=>{
        setName("");
        setPassword("");
        setModalOpen(false);
    },2000)
  };

  return (
    <div className="container col-md-4 mt-4">
      <form className="border border-primary p-4 rounded" onSubmit={Submit}>
        <h1 className="text-center fw-normal text-muted">Props Using Input</h1>
        <div className="form-group">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mt-3 mx-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-dark mt-3"
            onClick={resetValue}
          >
            Reset
          </button>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Information
                </h5>
              </div>
              <div className="modal-body">
                <h5>Name: {name}</h5>
                <h5>Password: {password}</h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;
