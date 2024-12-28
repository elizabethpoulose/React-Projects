import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ username }) => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="">
        <div className="col-sm-12">
          <div className="profile mt-2 mb-2 text-center">
            <h1>Profile</h1>
          </div>
          <h2 className="mt-5 text-start">Username: username</h2>
          <h2 className="mt-5 text-start">Email: abc@gmail.com</h2>
          <h2 className="mt-5 text-start">password : ********</h2>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
