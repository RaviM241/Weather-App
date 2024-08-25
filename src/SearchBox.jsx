import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f50d61315d257d4b2e214b40bd50cb70";

  let getWeatherInfo = async () => {
    try {
      let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonRes = await Response.json();
      console.log(jsonRes);
      let Result = {
        City: city,
        feels_like: jsonRes.main.feels_like,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        weather: jsonRes.weather[0].description,
      };
      console.log(Result);
      return Result;
    } catch (error) {
      throw error;
    }

  }


  let handleChange = (evt) => {
    setCity(evt.target.value);
  }
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <form className='SearchBox' onSubmit={handleSubmit}>

        <TextField id="city"
          label="city name" variant="outlined" name='city' value={city} onChange={handleChange} required />
        &nbsp; &nbsp;&nbsp;
        <Button variant="contained" type='submit' >
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place exists!</p>}
      </form >
    </>
  )
}