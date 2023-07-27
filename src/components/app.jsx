import React, { useState } from "react";
import Input from "./inputbox.jsx";
import List from "./list.jsx";

export default function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        setItems(prevValue => [...prevValue, inputText]);
        setInputText("");
    }

    function handleChange(e) {
        const newValue = e.target.value;
        setInputText(newValue);
    }

    function deleteItem(e) {
        const id = e.target.id;
        setItems(prevItems => prevItems.filter((item, index) => index !== Number(id)));

        console.log(e.target.id);
    }

    return (
        <div className="container">
            <h1> Task App</h1>
            <Input onClick={handleClick} onChange={handleChange} value={inputText} />
            <List listItem={
                items.map((item, index) => (
                    <li key={index} id={index} onClick={deleteItem}>{item}</li>
                ))} />
        </div>
    )
}