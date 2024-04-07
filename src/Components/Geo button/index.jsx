import React, { useEffect, useState, useCallback } from "react";
import st from "./styles.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeoButton = ({ onChange, checked, onChangeForecast }) => {
  const [location, setLocation] = useState(null);

  /* eslint-disable */
  const fetchWeatherCurrentData = useCallback(
    (lat, lon) => {
      if (location) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`
        )
          .then((response) => {
            if (response.status === 200) toast("Данные успешно получены!");
            return response.json();
          })
          .then((data) => {
            onChange(
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
          })
          .catch(() => {
            toast("Упс! Что-то пошло не так...");
            console.log("error");
          });
      }
    },
    [location]
  );

  const fetchWeatherForecastData = useCallback(
    (lat, lon) => {
      if (location) {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`
        )
          .then((response) => {
            if (response.status === 200) toast("Данные успешно получены!");
            return response.json();
          })
          .then((data) => {
            onChangeForecast(data);
            console.log(data);
          })
          .catch(() => {
            toast("Упс! Что-то пошло не так...");
            console.log("error");
          });
      }
    },
    [location]
  );

  /* eslint-enable */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                setLocation(pos.coords);
              },
              (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
              }
            );
          } else if (result.state === "denied") {
            alert(
              "Нет доступа к геопозиции. Введите местоположение вручную или измените настройки браузера"
            );
          }
        });
    } else {
      alert("Геолокация не поддерживается браузером");
    }
  }, []);

  useEffect(() => {
    if (location) {
      if (checked === false) {
        fetchWeatherCurrentData(location.latitude, location.longitude);
      } else {
        fetchWeatherForecastData(location.latitude, location.longitude);
      }
    }
  }, [location, checked, fetchWeatherCurrentData, fetchWeatherForecastData]);

  const handleClickGeo = () => {
    if (checked === false) {
      fetchWeatherCurrentData(location.latitude, location.longitude);
    } else {
      fetchWeatherForecastData(location.latitude, location.longitude);
    }
  };

  return (
    <>
      <button className={st.geoButton} onClick={handleClickGeo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </button>
    </>
  );
};

export default GeoButton;
