import React from "react";
import SearchString from "./Components/Search string";
import st from "./styles.module.css";
import "./reset.css";
import GeoButton from "./Components/Geo button";
import GetForecast from "./Components/Get forecast";

function App() {
  return (
    <div className={st.widget}>
      <SearchString />
      <GeoButton />
      <GetForecast />
    </div>
  );
}

export default App;
