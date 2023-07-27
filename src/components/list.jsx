import React from "react";

export default function List(props) {
    return (
        <div className="list-output">
            <ul>
                {props.listItem}
            </ul>
        </div>
    )
}