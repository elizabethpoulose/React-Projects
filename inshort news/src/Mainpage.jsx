import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import News from "./News";
import Profile from "./Profile";

const Mainpage = () => {
  const [page, setPage] = useState("news");
  
  const styles = {
    header: {
      backgroundColor: "red",
      height: "150px",
    },
    button: {
      border: "1 px",
      borderRadius:"5px",
      cursor: "pointer",
      backgroundColor:"red"
    },
  };

  return (
    <div>
      <div className="">
        <div className="col-sm-12 text-center" style={styles.header}>
          <h1 className="text-decoration-underline">NewSpot</h1>
          <div className="row justify-content-center">
            <div className="col-4">
              <button
                onClick={() => setPage("news")}
                style={styles.button}
              >
                Show News
              </button>
            </div>
            <div className="col-4">
              <button
                onClick={() => setPage("profile")}
                style={styles.button}
              >
                Show Profile
              </button>
            </div>
          </div>
          {page === "news" ? <News /> : <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
