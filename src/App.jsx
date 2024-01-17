import React from "react";
import SearchString from "./Components/Search string";
import st from "./styles.module.css";
import "./reset.css";
import GeoButton from "./Components/Geo button"

function App() {
  return (
    <div className={st.widget}>
      <SearchString />
      <GeoButton />
    </div>
  );
}

export default App;
