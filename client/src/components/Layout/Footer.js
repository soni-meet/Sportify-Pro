import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1a2038",
    color: "#fff",
    textAlign: "center",
    padding: "30px 0",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "18px",
    transition: "color 0.2s ease",
  };

  const linkHoverStyle = {
    color: "#ff9800", // Change the color on hover to a bright orange
  };

  const copyrightStyle = {
    fontSize: "30px",
    marginBottom: "10px",
  };

  return (
    <div style={footerStyle}>
      <h1 style={copyrightStyle}>All Right Reserved &copy; SportifyPro</h1>
      <p>
        <Link
          to="/about"
          style={linkStyle}
          activeStyle={linkHoverStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ff9800")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          About
        </Link>
        |
        <Link
          to="/contact"
          style={linkStyle}
          activeStyle={linkHoverStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ff9800")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          Contact
        </Link>
        |
        <Link
          to="/policy"
          style={linkStyle}
          activeStyle={linkHoverStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ff9800")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
