import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
    textAlign: "center",
    backgroundImage: 'url("https://your-image-url.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0",
  };

  const titleStyle = {
    fontSize: "48px",
      marginBottom: "20px",
    color:"black"
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={homeStyle}>
          <h2 style={titleStyle}>Home</h2>
          <h1>Home Component</h1>
      {user ? (
        <button onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Home;
