import React from "react";
import st from "./styles.module.css";

const WeatherMain = ({ weather }) => {
    const weatherFinal = weather[0].toUpperCase() + weather.slice(1);
    console.log(weatherFinal);

    return (
        <div className={st.weather}>{weatherFinal}</div>
    )
}

export default WeatherMain;