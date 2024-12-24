import React, { useState } from "react";

const Component = () => {
  const [username, setUsername] = useState("");
  const [userdata, setUserData] = useState(null);

  const fetchApi = () => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((e) => console.error("Error fetching data", e));
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchApi();
    }
  };

  return (
    <div className="container">
      <div className="search">
        <h1>Search Github Username</h1>
        <input
          type="text"
          placeholder="Github Username"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={username}
        />
        <button className="btn" onClick={fetchApi} disabled={!username}>
          Search
        </button>

        <div className="content">
          {userdata ? (
            <>
              <h3>Username: {userdata.login}</h3>
              <img
                className="img"
                src={userdata.avatar_url}
                alt={`${userdata.login}'s avatar`}
              />
            </>
          ) : (
            <p>No User Data Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
