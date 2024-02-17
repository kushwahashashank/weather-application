"use client";
import React, { useState, useEffect } from "react";
import "./details.css";
import { fetchWeatherData } from "../../api/api";
const Details = ({ selectedcordinates }) => {
  const [details, setDetails] = useState({});
  async function getdetails(selectedcordinates) {
    if (selectedcordinates != undefined) {
      const detail = await fetchWeatherData(selectedcordinates);
      setDetails(detail);
      console.log("details", detail);
    }
  }
  useEffect(() => {
    getdetails(selectedcordinates);
  }, [selectedcordinates]);

  return (
    <>
      <div className="details-container">
        <div className="content">
          <h3>CURRENT WEATHER</h3>
          <div className="details">
            <h4>{details?.data?.location?.name}</h4>
            <p>Today {details?.data?.location?.localtime}</p>
          </div>
          <div className="details">
            <h4>{details?.data?.current?.temp_c}°C</h4>
            <p>{details?.data?.current?.condition?.text}</p>
          </div>
        </div>
        <div className="content">
          <h3>AIR CONDITIONS</h3>
          <div className="details-1">
            <div className="details">
              <p>Real Feel</p>
              <h4>{details?.data?.current?.feelslike_c}°C </h4>
            </div>
            <div className="details">
              <p>Wind</p>
              <h4>{details?.data?.current?.wind_kph} KPH </h4>
            </div>
          </div>
          <div className="details-1">
            <div className="details">
              <p>Clouds</p>
              <h4>{details?.data?.current?.cloud}</h4>
            </div>
            <div className="details">
              <p>Humidity</p>
              <h4>{details?.data?.current?.humidity}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
