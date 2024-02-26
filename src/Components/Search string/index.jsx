import React from "react";
import { useState } from "react";
import st from "./styles.module.css";

const SearchString = ({ onChange }) => {
    const [location, setLocation] = useState();

    const handlerChangeInput = (e) => {
        setLocation(e.target.value);
    };

    const handlerKeyPress = (event) => {
        const { key } = event;
        if (key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`)
            .then((response) => { return response.json(); })
            .then((data) => {
                onChange(data.main.temp, data.weather[0].description, data.main.pressure);
            })
            .catch(() => { console.log("error") });
        };
    };

    const handleClickForecast = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=61e76cb2a5d0d8548e0aecd3823f2abc&units=metric&lang=ru`)
        .then((response) => { return response.json(); })
        .then((data) => {
            onChange(data.main.temp, data.weather[0].description, data.main.pressure);
        })
            .catch(() => { console.log("error") });
    };

    return (
        <div className={st.searchStringAndButton}>
            <div className={st.searchStringContainer}>
            <svg className={st.searchSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginTop: "12px"}}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input className={st.searchStringInput}
                placeholder={"Искать местоположение"}
                onChange={handlerChangeInput}
                onKeyDown={handlerKeyPress}
                value={location}
                onInput={e => setLocation(e.target.value)}>
                </input>
                <button className={st.forecastButton}
                onClick={handleClickForecast}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                    </svg>
                    </button>
                    </div>
                    </div>
                )
            }

export default SearchString;