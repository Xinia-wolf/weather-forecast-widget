import React from "react";
import st from "./styles.module.css";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherDataContext } from "../Context";

const SwitchData = ({ onChange, onChangeForecast, onChangeLocation }) => {
  const [checked, setChecked] = useState(true);
  const { location, setLocation } = useContext(WeatherDataContext);

  const fetchWeatherForecastData = (location) => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`
      )
        .then((response) => {
          if (response.status === 200) toast("Данные успешно получены!");
          return response.json();
        })
        .then((data) => {
          onChangeForecast(data);
          setLocation(data.city.name);
          console.log(data);
        })
        .catch(() => {
          toast("Упс! Что-то пошло не так...");
          console.log("error");
        });
    }
  };

  const fetchWeatherCurrentData = (location) => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`
      )
        .then((response) => {
          if (response.status === 200) toast("Данные успешно получены!");
          return response.json();
        })
        .then((data) => {
          onChangeLocation(
            location,
            data.main.temp,
            data.weather[0].description,
            data.main.pressure,
            data.weather[0].main,
            data.main.humidity,
            data.wind.speed,
            data.sys.sunrise,
            data.sys.sunset
          );
          setLocation(location);
          console.log(data);
        })
        .catch(() => {
          toast("Упс! Что-то пошло не так...");
          console.log("error");
        });
    }
  };

  const changeCheckbox = () => {
    setChecked(!checked);
    onChange(checked);
    if (checked === true) {
      fetchWeatherForecastData(location);
    } else if (checked === false) {
      fetchWeatherCurrentData(location);
    }
    
  };

  return (
    <div className={st.switchBlock}>
      <input
        type="checkbox"
        id="switch"
        className={st.checkbox}
        onChange={changeCheckbox}
      />

      <label htmlFor="switch" className={st.toggle}>
        <p className={st.buttonCaptionNow}>Now</p>
        <p className={st.buttonCaption}>5 days</p>
      </label>
    </div>
  );
};

export default SwitchData;
