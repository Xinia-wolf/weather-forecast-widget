import React from "react";
import st from "./styles.module.css";

const FiveDays = () => {

    return (
        <div className={st.temp}>{temp}&deg;</div>
    )
}

export default TempBlock;