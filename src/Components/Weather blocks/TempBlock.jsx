import React from "react";
import st from "./styles.module.css";

const TempBlock = ({ temp }) => {
    const roundTheNumber = Math.round(temp);

    return (
        <div className={st.temp}>{roundTheNumber}&deg;</div>
    )
}

export default TempBlock;