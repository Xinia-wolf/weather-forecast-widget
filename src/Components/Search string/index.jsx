import React from "react";
import { useState } from "react";
import st from "./styles.module.css";

const SearchString = () => {
    const [input, setInput] = useState("");
    const [location, setLocation] = useState("");

    const handlerChangeInput = (e) => {
        setInput(e.target.value);
    };

    const handlerKeyPress = (event) => {
        const { key } = event;
        if (key === "Enter") {
            setInput(event.target.value);
            setLocation(input);
            fetch(`https://dummyimage.com/${input}x300/`)
            .then((response) => {
                console.log("response", response);
                const result = response;
                console.log(result);
            })
            .catch(() => { console.log("error") });
        };
    };

    return (
        <div>
            <div className={st.searchStringContainer}>
            <svg className={st.searchSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginTop: "7px"}}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input className={st.searchStringInput}
                placeholder={"Введите ваше местоположение"}
                onChange={handlerChangeInput}
                onKeyDown={handlerKeyPress}
                value={input}
                onInput={e => setInput(e.target.value)}>
                </input>
            </div>
                </div>
                )
            }

export default SearchString;