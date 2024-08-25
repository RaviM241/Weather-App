import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
import { useState } from "react"
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    City: "Delhi",
    feels_like: 24,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze"

  });
  let updateInfo = (Result) => {
    setWeatherInfo(Result);
  }
  return (
    <div>
      <h2>WeatherApp!</h2>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherInfo} />
    </div>
  )
}