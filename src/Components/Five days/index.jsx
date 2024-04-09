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

  const getWeatherIcon = (weatherId) => {
    switch (weatherId) {
      case 800:
        return <img src={ClearSky} className={st.weatherIcon} alt="Clear Sky" />;
      case 801:
        return <img src={FewClouds} className={st.weatherIcon} alt="Few Clouds" />;
      case 802:
        return <img src={ScatteredClouds} className={st.weatherIcon} alt="Scattered Clouds" />;
      case 803:
        return <img src={BrokenClouds} className={st.weatherIcon} alt="Broken Clouds" />;
      case 804:
        return <img src={BrokenClouds} className={st.weatherIcon} alt="Overcast" />;
      case 500:
        return <img src={Rain} className={st.weatherIcon} alt="Rain" />;
      case 501:
        return <img src={Rain} className={st.weatherIcon} alt="Moderate Rain" />;
      case 502:
        return <img src={Rain} className={st.weatherIcon} alt="Heavy Intensity Rain" />;
      case 503:
        return <img src={Rain} className={st.weatherIcon} alt="Very Heavy Rain" />;
      case 504:
        return <img src={Rain} className={st.weatherIcon} alt="Extreme Rain" />;
      case 511:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 520:
        return <img src={Drizzle} className={st.weatherIcon} alt="Light Intensity Drizzle" />;
      case 521:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 522:
        return <img src={Drizzle} className={st.weatherIcon} alt="Heavy Intensity Drizzle" />;
      case 531:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 701:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Mist" />;
      case 711:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Smoke" />;
      case 721:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Haze" />;
      case 731:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Dust" />;
      case 741:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Fog" />;
      case 751:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Sand" />;
      case 761:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Dust" />;
      case 762:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Ash" />;
      case 771:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Squalls" />;
      case 781:
        return <img src={Atmosphere} className={st.weatherIcon} alt="Tornado" />;
      case 200:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 201:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 202:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 210:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 211:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 212:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 221:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 230:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 231:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 232:
        return <img src={Thunderstorm} className={st.weatherIcon} alt="Thunderstorm" />;
      case 300:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 301:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 302:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 310:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 311:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 312:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 313:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 314:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 321:
        return <img src={Drizzle} className={st.weatherIcon} alt="Drizzle" />;
      case 600:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 601:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 602:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 611:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 612:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 613:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 615:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 616:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 620:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 621:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      case 622:
        return <img src={Snow} className={st.weatherIcon} alt="Snow" />;
      default:
        return <img src={FewClouds} className={st.weatherIcon} alt="Unknown" />;
    }
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
