import React, { useEffect, useState } from "react";
import "./reservation.css";
import Button from "@mui/material/Button";

function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");
  const [occasion, setOcassion] = useState("");

  const availableTimes = [
    { id: 1, value: "11:00" },
    { id: 2, value: "12:00" },
    { id: 3, value: "13:00" },
  ];

  useEffect(() => {
    console.log(fetchAPI("12/12/2022"));
  });

  return (
    <main className="reservation-container">
      <div className="reservation-banner">
        <h1>Table Reservation</h1>
        <p>Don't miss out, book your table now!</p>
      </div>
      <form className="reservation-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          className="datepicker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="res-date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          className="timepicker"
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time, index) => {
            return <option key={index}>{time.value}</option>;
          })}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          className="occasion"
          id="occasion"
          value={occasion}
          onChange={(e) => setOcassion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

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
        >
          Make Your reservation
        </Button>
      </form>
    </main>
  );
}

export default Reservation;
