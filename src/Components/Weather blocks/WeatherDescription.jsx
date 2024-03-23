import React from "react";
import st from "./styles.module.css";

const WeatherDescription = ({ description }) => {
    const weatherFinal = description[0].toUpperCase() + description.slice(1);

    return (
        <div className={st.weather}>{weatherFinal}</div>
    )
}

export default WeatherDescription;