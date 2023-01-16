import React, { useEffect, useState } from "react";
import "./confirmation.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const iconPath = process.env.PUBLIC_URL;

function Confirmation() {
  const navigate = useNavigate();

  const [guests, setGuests] = useState("");
  const [dates, setDates] = useState("");

  useEffect(() => {
    setGuests(localStorage.getItem("guests"));
    setDates(localStorage.getItem("date"));
    console.log(localStorage.getItem("date"));
  }, []);

  const handleButton = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-logo">
        <img
          width="64"
          height="64"
          style={{
            fill: "blue",
          }}
          src={`${iconPath}/check.svg`}
          alt="logo"
        ></img>
      </div>
      <div className="confirmation-content">
        <h2>Congratulations!</h2>
        <h5>
          Your table for {guests} persons on {dates} has been successfully
          reserved.
        </h5>
        <h4>See you soon!</h4>
      </div>
      <div className="confirmation-cta">
        <Button
          className="reserveButton"
          variant="contained"
          style={{
            backgroundColor: "#F4CE14",
            color: "black",
            fontWeight: 700,
            textDecoration: "none",
            padding: "12px",
            margin: "32px 0",
          }}
          onClick={() => handleButton()}
        >
          Go to homepage
        </Button>
      </div>
    </div>
  );
}

export default Confirmation;
