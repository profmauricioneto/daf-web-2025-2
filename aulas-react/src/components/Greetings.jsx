import React from "react";

export default function Greeting(props) {
    return(
        <div>
            <h2>Greeting Mr(s) {props.name}</h2>
            <p>My first component with props</p>
        </div>
    );
}