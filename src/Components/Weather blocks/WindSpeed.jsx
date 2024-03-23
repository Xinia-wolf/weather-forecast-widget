import React from "react";
import st from "./styles.module.css";

const WindSpeed = ({ windSpeed }) => {
    return (
        <div className={st.windSpeedBlock}>
            <div className={st.windSpeed}>{windSpeed}</div>
            <span className={st.windSpeedCaption}>Скорость ветра</span>
        </div>
    )
}

export default WindSpeed;