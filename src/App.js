import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import Reservation from "./components/reservation/reservation";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
