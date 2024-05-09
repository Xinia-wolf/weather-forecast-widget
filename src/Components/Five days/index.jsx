import React from "react";
import st from "./styles.module.css";
import Atmosphere from "../../icons/atmosphere.png";
import BrokenClouds from "../../icons/brokenClouds.png";
import ClearSky from "../../icons/clearSky.png";
import Drizzle from "../../icons/drizzle.png";
import FewClouds from "../../icons/fewClouds.png";
import Rain from "../../icons/rain.png";
import ScatteredClouds from "../../icons/scatteredClouds.png";
import Snow from "../../icons/snow.png";
import Thunderstorm from "../../icons/thunderstorm.png";

const FiveDays = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) {
    return <div>Loading...</div>;
  }

  const firstDay = forecastData.list[7];
  const firstDayDate = new Date(firstDay.dt * 1000);
  const secondDay = forecastData.list[15];
  const secondDayDate = new Date(secondDay.dt * 1000);
  const thirdDay = forecastData.list[23];
  const thirdDayDate = new Date(thirdDay.dt * 1000);
  const forthDay = forecastData.list[31];
  const forthDayDate = new Date(forthDay.dt * 1000);
  const fifthDay = forecastData.list[39];
  const fifthDayDate = new Date(fifthDay.dt * 1000);

  const weatherIcons = new Map([
    [800, ClearSky],
    [801, FewClouds],
    [802, ScatteredClouds],
    [803, BrokenClouds],
    [804, BrokenClouds],
    [500, Rain],
    [501, Rain],
    [502, Rain],
    [503, Rain],
    [504, Rain],
    [511, Snow],
    [520, Drizzle],
    [521, Drizzle],
    [522, Drizzle],
    [531, Drizzle],
    [701, Atmosphere],
    [711, Atmosphere],
    [721, Atmosphere],
    [731, Atmosphere],
    [741, Atmosphere],
    [751, Atmosphere],
    [761, Atmosphere],
    [762, Atmosphere],
    [771, Atmosphere],
    [781, Atmosphere],
    [200, Thunderstorm],
    [201, Thunderstorm],
    [202, Thunderstorm],
    [210, Thunderstorm],
    [211, Thunderstorm],
    [212, Thunderstorm],
    [221, Thunderstorm],
    [230, Thunderstorm],
    [231, Thunderstorm],
    [232, Thunderstorm],
    [300, Drizzle],
    [301, Drizzle],
    [302, Drizzle],
    [310, Drizzle],
    [311, Drizzle],
    [312, Drizzle],
    [313, Drizzle],
    [314, Drizzle],
    [321, Drizzle],
    [600, Snow],
    [601, Snow],
    [602, Snow],
    [611, Snow],
    [612, Snow],
    [613, Snow],
    [615, Snow],
    [616, Snow],
    [620, Snow],
    [621, Snow],
    [622, Snow],
  ]);

  const getWeatherIcon = (weatherId) => {
    const icon = weatherIcons.get(weatherId);
    return icon ? (
      <img
        src={icon}
        className={st.weatherIcon}
        alt={`${icon}`}
      />
    ) : (
      <img src={FewClouds} className={st.weatherIcon} alt="Unknown" />
    );
  };

  return (
    <div className={st.fiveDaysContainer}>
      <h2 className={st.fiveDaysHeader}>Прогноз на 5 дней</h2>
      <div className={st.dayContainer}>
        {getWeatherIcon(firstDay.weather[0].id)}
        <p className={st.dayTempMax}>
          {Math.round(firstDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47; {Math.round(firstDay.main.temp_min)}&deg;
        </p>
        <div className={st.dateContainer}>
          <p className={st.dayTimestamp}>
            {firstDayDate.toLocaleString("ru-RU", { day: "numeric" })}
          </p>
          <p className={st.monthAndWeekday}>
            {firstDayDate.toLocaleString("en-US", { month: "long" })}
            {", "}
            {firstDayDate.toLocaleString("ru-RU", { weekday: "long" })}
          </p>
        </div>
      </div>
      <div className={st.dayContainer}>
        {getWeatherIcon(secondDay.weather[0].id)}
        <p className={st.dayTempMax}>
          {Math.round(secondDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47; {Math.round(secondDay.main.temp_min)}&deg;
        </p>
        <div className={st.dateContainer}>
          <p className={st.dayTimestamp}>
            {secondDayDate.toLocaleString("ru-RU", { day: "numeric" })}
          </p>
          <p className={st.monthAndWeekday}>
            {secondDayDate.toLocaleString("en-US", { month: "long" })}
            {", "}
            {secondDayDate.toLocaleString("ru-RU", { weekday: "long" })}
          </p>
        </div>
      </div>
      <div className={st.dayContainer}>
        {getWeatherIcon(thirdDay.weather[0].id)}
        <p className={st.dayTempMax}>
          {Math.round(thirdDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47; {Math.round(thirdDay.main.temp_min)}&deg;
        </p>
        <div className={st.dateContainer}>
          <p className={st.dayTimestamp}>
            {thirdDayDate.toLocaleString("ru-RU", { day: "numeric" })}
          </p>
          <p className={st.monthAndWeekday}>
            {thirdDayDate.toLocaleString("en-US", { month: "long" })}
            {", "}
            {thirdDayDate.toLocaleString("ru-RU", { weekday: "long" })}
          </p>
        </div>
      </div>
      <div className={st.dayContainer}>
        {getWeatherIcon(forthDay.weather[0].id)}
        <p className={st.dayTempMax}>
          {Math.round(forthDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47; {Math.round(forthDay.main.temp_min)}&deg;
        </p>
        <div className={st.dateContainer}>
          <p className={st.dayTimestamp}>
            {forthDayDate.toLocaleString("ru-RU", { day: "numeric" })}
          </p>
          <p className={st.monthAndWeekday}>
            {forthDayDate.toLocaleString("en-US", { month: "long" })}
            {", "}
            {forthDayDate.toLocaleString("ru-RU", { weekday: "long" })}
          </p>
        </div>
      </div>
      <div className={st.dayContainer}>
        {getWeatherIcon(fifthDay.weather[0].id)}
        <p className={st.dayTempMax}>
          {Math.round(fifthDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47; {Math.round(fifthDay.main.temp_min)}&deg;
        </p>
        <div className={st.dateContainer}>
          <p className={st.dayTimestamp}>
            {fifthDayDate.toLocaleString("ru-RU", { day: "numeric" })}
          </p>
          <p className={st.monthAndWeekday}>
            {fifthDayDate.toLocaleString("en-US", { month: "long" })}
            {", "}
            {fifthDayDate.toLocaleString("ru-RU", { weekday: "long" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveDays;
