import React from "react";
import st from "./styles.module.css";

const Pressure = ({ pressure }) => {
    return (
        <div className={st.pressureBlock}>
            <div className={st.pressure}>{pressure}</div>
            <span className={st.pressureCaption}>Давление</span>
        </div>
    )
}

export default Pressure;