import React from "react";
import SearchString from "./Components/Search string";
import st from "./styles.module.css";
import "./reset.css";

function App() {
  return (
    <div className={st.widget}>
      <SearchString />
    </div>
  );
}

export default App;
