import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import drizzle_icon from "../Assets/drizzle.png";
import cloud_icon from "../Assets/cloud.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import clear_icon from "../Assets/clear.png";

const WetherApp = () => {
  let api_key = "0bbc7d410b53686b28d70d53ae954042";
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value == "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let response = await fetch(url)
    let data = await response.json()
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    
    humidity[0].innerHTML = data.main.humidity + "%"
    wind[0].innerHTML = data.wind.speed + " km/h"
    temperature[0].innerHTML = data.main.temp + "°"
    location[0].innerHTML = data.name

  }

  return (
    <div className="container">
      <h1>Welcome to ...</h1>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search City" />
      <div className="search-icon"
      onClick={() => {
        search();
      }}
      >
      <img src={search_icon} alt="" />
      </div>

      </div>

      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Addis Ababa</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetherApp;
