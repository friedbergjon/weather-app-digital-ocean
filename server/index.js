const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 5000;
require ('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, hostname, ()=>{
    console.log(`The server is running on ${hostname}${port}`)
})



app.post('/', async (req, res)=>{
const {zipcode} = req.body


 const weather = await axios.get(`https://api.weatherstack.com/current?access_key=${process.env.api_key}&query=${zipcode}`)
 res.send(weather.data)
 console.log(weather.data)
})