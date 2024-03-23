import React from "react";
import st from "./styles.module.css";

const Humidity = ({ humidity }) => {
    return (
        <div className={st.humidityBlock}>
            <div className={st.humidity}>{humidity}%</div>
            <span className={st.humidityCaption}>Влажность</span>
        </div>
    )
}

export default Humidity;