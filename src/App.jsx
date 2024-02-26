import React, { useState } from "react";
import SearchString from "./Components/Search string";
import st from "./styles.module.css";
import "./reset.css";
import GeoButton from "./Components/Geo button";
import TempBlock from "./Components/Weather blocks/TempBlock";
import WeatherMain from "./Components/Weather blocks/WeatherMain";
import Pressure from "./Components/Weather blocks/Pressure";

function App() {
  const [temp, setTemp] = useState(27);
  const [weather, setWeather] = useState("Шторм");
  const [pressure, setPressure] = useState(1015);

  const handleChange = (tempValue, weatherMain, pressureValue) => {
    setTemp(tempValue);
    setWeather(weatherMain);
    setPressure(pressureValue);
  }
  
  return (
    <div className={st.widget}>
      <GeoButton onChange={handleChange}/>
      <SearchString onChange={handleChange}/>
      <TempBlock temp={temp} />
      <WeatherMain weather={weather} />
      <Pressure pressure={pressure} />
    </div>
  );
}

export default App;
