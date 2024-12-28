import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
import News from "./News";
import Profile from "./Profile";
import MainPage from "./Mainpage"; 

const App = () => {
  const [username, setUser] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/welcome" element={<Welcome username={username} />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile username = {username} />} />
      </Routes>
    </Router>
  );
};

export default App;
