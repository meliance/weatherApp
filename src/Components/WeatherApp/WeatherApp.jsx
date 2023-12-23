import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import drizzle_icon from '../Assets/drizzle.png'
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import clear_icon from '../Assets/clear.png'

const WetherApp = () => {
  return (
    <div className='container'>
       <h1>Welcome to ...</h1>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search City' />
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Addis Ababa</div>
     
    </div>
  )
}

export default WetherApp
