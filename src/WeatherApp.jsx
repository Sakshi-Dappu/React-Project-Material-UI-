import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
const [weatherInfo, setWeatherInfo] = useState({

        city:"Pune",
        feelsLike: 27.07,
        temp: 27.13,
        tempMax: 27.13,
        tempMin: 27.13,
        humidity: 42,
        weather: "few clouds",
      });

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
};

  return (
    <div style={{ textAlign: 'center'}}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox  info={weatherInfo}/>
    </div>
  );
}
