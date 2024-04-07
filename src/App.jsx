import React, { useState } from "react";
import SearchString from "./Components/Search string";
import "./reset.css";
import GeoButton from "./Components/Geo button";
import TempBlock from "./Components/Weather blocks/TempBlock";
import WeatherDescription from "./Components/Weather blocks/WeatherDescription";
import Pressure from "./Components/Weather blocks/Pressure";
import Humidity from "./Components/Weather blocks/Humidity";
import WindSpeed from "./Components/Weather blocks/WindSpeed";
import Sunrise from "./Components/Weather blocks/Sunrise";
import Sunset from "./Components/Weather blocks/Sunset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SwitchData from "./Components/Switch data";
import FiveDays from "./Components/Five days";

function App() {
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(27.95);
  const [description, setDescription] = useState("Облачно с прояснениями");
  const [pressure, setPressure] = useState(1015);
  const [main, setMain] = useState(
    "https://www.austinmonitor.com/wp-content/uploads/2020/10/stormy-sky-14675664419xM.jpg"
  );
  const [humidity, setHumidity] = useState(64);
  const [windSpeed, setWindSpeed] = useState(0.62);
  const [sunriseUnix, setSunriseUnix] = useState(1661834187);
  const [sunsetUnix, setSunsetUnix] = useState(1661882248);
  const [checked, setChecked] = useState(false);
  const [forecastData, setForecastData] = useState();

  const handleChange = (
    locationValue,
    tempValue,
    weatherDescription,
    pressureValue,
    weatherMain,
    humidityValue,
    windSpeedValue,
    sunriseTimestamp,
    sunsetTimestamp
  ) => {
    setLocation(locationValue);
    setTemp(tempValue);
    setDescription(weatherDescription);
    setPressure(pressureValue);
    setHumidity(humidityValue);
    setWindSpeed(windSpeedValue);
    setSunriseUnix(sunriseTimestamp);
    setSunsetUnix(sunsetTimestamp);

    switch (weatherMain) {
      case "Thunderstorm":
        setMain(
          "https://proprikol.ru/wp-content/uploads/2019/12/kartinki-pro-molniyu-i-grozu-12.jpg"
        );
        break;
      case "Drizzle":
        setMain(
          "https://get.pxhere.com/photo/water-sky-rain-drizzle-precipitation-drop-atmosphere-cloud-tree-photography-space-window-windshield-meteorological-phenomenon-automotive-window-part-1521117.jpg"
        );
        break;
      case "Rain":
        setMain("https://scx2.b-cdn.net/gfx/news/hires/2018/rainstorm.jpg");
        break;
      case "Snow":
        setMain(
          "https://vsegda-pomnim.com/uploads/posts/2023-07/1689342706_vsegda-pomnim-com-p-sneg-fon-foto-21.jpg"
        );
        break;
      case "Atmosphere":
        setMain("https://jooinn.com/images/white-smoke-4.png");
        break;
      case "Clear":
        setMain("https://jooinn.com/images/calm-sky-7.jpg");
        break;
      case "Clouds":
        setMain(
          "https://www.austinmonitor.com/wp-content/uploads/2020/10/stormy-sky-14675664419xM.jpg"
        );
        break;
      default:
        setMain(
          "https://www.austinmonitor.com/wp-content/uploads/2020/10/stormy-sky-14675664419xM.jpg"
        );
    }
  };

  const handleChangeForecast = (data) => {
    setForecastData(data);
  };

  const switchData = (checkedState) => {
    setChecked(checkedState);
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + main + ")",
        backgroundSize: "cover",
        paddingTop: "25px",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <SwitchData onChange={switchData} location={location} />
      <GeoButton
        onChange={handleChange}
        checked={checked}
        onChangeForecast={handleChangeForecast}
      />
      <SearchString
        onChange={handleChange}
        checked={checked}
        onChangeForecast={handleChangeForecast}
      />
      {checked ? (
        <FiveDays
          forecastData={forecastData}
        />
      ) : (
        <>
          <TempBlock temp={temp} />
          <WeatherDescription description={description} />
          <Pressure pressure={pressure} />
          <Humidity humidity={humidity} />
          <WindSpeed windSpeed={windSpeed} />
          <Sunrise sunriseUnix={sunriseUnix} />
          <Sunset sunsetUnix={sunsetUnix} />
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
