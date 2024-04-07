import React from "react";
import st from "./styles.module.css";
import { useState } from "react";

const SwitchData = ({ onChange }) => {
  const [checked, setChecked] = useState(true);

  const changeCheckbox = () => {
    setChecked(!checked);
    onChange(checked);
  };

  return (
    <div className={st.switchBlock}>
      <input
        type="checkbox"
        id="switch"
        className={st.checkbox}
        onChange={changeCheckbox}
      />

      <label htmlFor="switch" className={st.toggle}>
        <p className={st.buttonCaptionNow}>Now</p>
        <p className={st.buttonCaption}>5 days</p>
      </label>
    </div>
  );
};

export default SwitchData;
