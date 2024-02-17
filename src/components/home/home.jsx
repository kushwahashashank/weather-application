"use client";
import React, { useState, useEffect } from "react";
import "./home.css";
import { Details, Search } from "../index";
const Home = () => {
  const [selectedcordinates, setSelectedcordinates] = useState();
  function setSelectedOption(input) {
    setSelectedcordinates(input);
  }

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <Search setSelectedOption={setSelectedOption} />
          <Details selectedcordinates={selectedcordinates} />
        </div>
      </div>
    </>
  );
};

export default Home;
