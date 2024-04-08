import React from "react";
import st from "./styles.module.css";

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

  return (
    <div className={st.fiveDaysContainer}>
      <h2 className={st.fiveDaysHeader}>Прогноз на 5 дней</h2>
      <div className={st.dayContainer}>
        <p className={st.dayTempMax}>
          {Math.round(firstDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47;{" "}{Math.round(firstDay.main.temp_min)}&deg;
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
      <p className={st.dayTempMax}>
          {Math.round(secondDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47;{" "}{Math.round(secondDay.main.temp_min)}&deg;
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
      <p className={st.dayTempMax}>
          {Math.round(thirdDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47;{" "}{Math.round(thirdDay.main.temp_min)}&deg;
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
      <p className={st.dayTempMax}>
          {Math.round(forthDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47;{" "}{Math.round(forthDay.main.temp_min)}&deg;
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
      <p className={st.dayTempMax}>
          {Math.round(fifthDay.main.temp_max)}&deg;
        </p>
        <p className={st.dayTempMin}>
          &#47;{" "}{Math.round(fifthDay.main.temp_min)}&deg;
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
