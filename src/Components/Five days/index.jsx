import React from "react";
import st from "./styles.module.css";

const FiveDays = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.fiveDaysContainer}>
      <h2 className={st.fiveDaysHeader}>Прогноз на 5 дней</h2>
      <button onClick={() => console.log(forecastData)}></button>
      <div className={st.dayContainer}>
        <p>{forecastData && forecastData.list && forecastData.list[7].main.temp_max}</p>
      </div>
      <div className={st.dayContainer}></div>
      <div className={st.dayContainer}></div>
      <div className={st.dayContainer}></div>
      <div className={st.dayContainer}></div>
    </div>
  );
};

export default FiveDays;
