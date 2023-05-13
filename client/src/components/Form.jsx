import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [zipcode, setZipCode] = useState('')
const navigate = useNavigate();
 const handleSubmit = async (e) =>{
    e.preventDefault();
   setZipCode('')






    const weatherData = await axios.post('/', {zipcode})
    console.log(weatherData.data)
    navigate('/weather', {state: {data: weatherData.data}});

 }


  return (
    <div className ='app'>
      <br></br><br></br>
        <form onSubmit={handleSubmit}>
        <div className='search'>
       <input className = 'inputField' id='city' value = {zipcode} type='text' placeholder="Enter City or Zipcode" onChange= {e=>setZipCode(e.target.value)} required/>
       <br></br>
       <button className='getWeather'>Get Weather</button>
       </div>
       </form>
    </div>
  )
}

export default Form