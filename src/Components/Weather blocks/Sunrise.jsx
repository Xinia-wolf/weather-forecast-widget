import React from "react";
import st from "./styles.module.css";

const Sunrise = ({ sunriseUnix }) => {
    const sunriseConvert = new Date(sunriseUnix * 1000);
    const sunrise = sunriseConvert.toLocaleTimeString();

    return (
        <div className={st.sunriseBlock}>
            <div className={st.sunrise}>{sunrise}</div>
            <span className={st.sunriseCaption}>Время восхода</span>
        </div>
    )
}

export default Sunrise;