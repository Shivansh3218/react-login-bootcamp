import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    height: "60px",
    zIndex: "1000",
    boxSizing: "border-box",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  const containerStyle = {
    paddingTop: "60px", // to ensure the content is not hidden behind the navbar
  };

  return (
    <>
      <div style={navbarStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/signup" style={linkStyle}>
          Sign Up
        </Link>
      </div>
      <div style={containerStyle}>
        {/* This container is to ensure the content is pushed below the fixed navbar */}
      </div>
    </>
  );
}

export default Navbar;
