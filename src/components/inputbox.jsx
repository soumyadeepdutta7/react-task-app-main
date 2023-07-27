import React from "react";

export default function Input(props) {
    return (
        <div>
            <input type="text" placeholder="Add a Task" name="input" className="input" onChange={props.onChange} value={props.value} />
            <button type="submit" onClick={props.onClick} className="add-btn">+</button>
        </div>
    )
}