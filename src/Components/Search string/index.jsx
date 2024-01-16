import React from "react";
import { useState } from "react";
import st from "./styles.module.css"

const SearchString = () => {
    const [inputValue, setInputValue] = useState("");
    const [location, setLocation] = useState(null);

    const handlerChangeInput = (event) => {
        if (location) {
            setLocation(null);
        };
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className={st.searchStringContainer}>
            <svg className={st.searchSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input className={st.searchStringInput}
                placeholder={"Введите ваше местоположение"}
                onChange={handlerChangeInput}
                value={inputValue}>
                </input>
            </div>
                </div>
                )
            }

export default SearchString;