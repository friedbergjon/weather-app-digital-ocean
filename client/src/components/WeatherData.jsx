import React from 'react'
import { useLocation } from 'react-router-dom'
import "../App.css"; 


const WeatherData = () => {


    const {state} = useLocation();
    const {data} = state;
    console.log(data)

  return (
    <div className="app">
    <div className="search">
       <br></br>
         <div className="container">
           <div className="top">
             <div className="location">
               <h1 className = "cityName">{data.location.name}</h1>
            </div>
          <div className>
             <h1 className = "temp">{Math.trunc((data.current.temperature) * 1.8 + 32)}°F</h1>
        </div>
   </div>
        <div className="description">
               <p className = "descriptionWeather">{data.current.weather_descriptions[0]}</p>
             </div>
             <img className= "logo" src={data.current.weather_icons[0]}/>
          <div className="bottom">
            <div className="feels">
             <p className="bold">{Math.trunc((data.current.feelslike)*1.8+32)}°F</p>
            <p className='weatherTitles'>Feels Like</p>
            </div>
           <div className="humidity">
             <p className="bold">{data.current.humidity}</p>
             <p className='weatherTitles'>Humidity</p>
            </div>
           <div className="wind">
             <p className="bold">{data.current.wind_speed}</p>
             <p className='weatherTitles'>Wind Speed</p>
            </div>
          </div>
         </div>
        </div>
      </div>
  )
}

export default WeatherData

