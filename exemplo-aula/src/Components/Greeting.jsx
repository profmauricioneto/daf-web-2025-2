import React, { Fragment } from 'react';

export const Greeting = (props) => {
    return (
        <Fragment>
            <h2>Hello Mr(s) {props.name}</h2>
            <p>This is my first component with params</p>
        </Fragment>
    )
}

export const CalcBirthYear = props => {
    const currentYear = new Date().getFullYear();
    let birthYear = currentYear - props.age;

    return (
        <Fragment>
            <h2>Your birth year is: {birthYear}</h2>
        </Fragment>
    )
}



