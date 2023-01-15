import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Button from "@mui/material/Button";

const iconPath = process.env.PUBLIC_URL;

function Homepage() {
  return (
    <main className="homepage-container">
      <div className="homepage-hero-section">
        <div className="homepage-hero-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <h2>
            Welcome to Little Lemon, a cozy and intimate restaurant tucked away
            in the heart of downtown. Our menu features a variety of fresh,
            seasonal dishes made with locally sourced ingredients. Whether
            you're in the mood for a hearty pasta dish or a light salad, we have
            something for everyone.
          </h2>
          <Link to="/reservation">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F4CE14",
                color: "black",
                fontWeight: 700,
                textDecoration: "none",
                padding: "12px",
              }}
              className="homepage-hero-cta-button"
            >
              Reserve a table
            </Button>
          </Link>
        </div>
        <div className="homepage-hero-img">
          <img
            src={`${iconPath}/restauranfood.jpg`}
            height="420"
            width="100%"
            alt="logo"
          ></img>
        </div>
      </div>

      <div className="homepage-about-section">
        <div className="homepage-about-img">
          <img
            src={`${iconPath}/Mario and Adrian A.jpg`}
            height="420"
            width="100%"
            alt="about"
          ></img>
        </div>
        <div className="homepage-about-text">
          <h1>About</h1>
          <p>Mario and Adrian</p>
          <h2>
            At Little Lemon, we believe that food is not just sustenance, but an
            experience. That's why we've created a warm and inviting atmosphere
            that's perfect for a romantic dinner, a casual lunch, or a special
            occasion. Our attentive staff will make sure you have a memorable
            meal, whether you're dining alone or with a group.
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
