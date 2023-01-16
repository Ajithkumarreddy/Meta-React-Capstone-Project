import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const iconPath = process.env.PUBLIC_URL;

function Header() {
  return (
    <header className="header-container">
      <div className="header-image">
        <img src={`${iconPath}/little-lemon.svg`} alt="logo"></img>
      </div>
      <div className="header-nav">
        <div className="header-home">
          <Link className="header-link" to="/">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
