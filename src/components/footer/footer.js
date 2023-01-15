import React from "react";
import "./footer.css";
const iconPath = process.env.PUBLIC_URL;

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={`${iconPath}/footer-logo.png`} alt="logo"></img>
      </div>
      <div className="footer-links"></div>
      <div className="footer-copyright">&#169; Copyright 2023 Little Lemon</div>
    </footer>
  );
}

export default Footer;
