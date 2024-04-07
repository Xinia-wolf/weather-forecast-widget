import React from "react";
import st from "./styles.module.css";

const Sunset = ({ sunsetUnix }) => {
    const sunsetConvert = new Date(sunsetUnix * 1000);
    const sunset = sunsetConvert.toLocaleTimeString();

    return (
        <div className={st.sunsetBlock}>
            <div className={st.sunset}>{sunset}</div>
            <span className={st.sunsetCaption}>Время заката</span>
        </div>
    )
}

export default Sunset;