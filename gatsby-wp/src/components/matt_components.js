import * as React from 'react'
import "../components/matt_shapes.css"



export function Q1(props) {
    return (
        <div className="quadrant1 parentStyle" style={{backgroundColor: props.color}} >
            <div className="diamond"> </div>
        </div>
    );
}

export function Q2(props) {
    return (
        <div className="quadrant2 parentStyle" style={{backgroundColor: props.color}} >
            <div className="circle"> </div>
        </div>
    );
}

export function Q3(props) {
    return (
        <div className="quadrant3 parentStyle" style={{backgroundColor: props.color}} >
            <div className="textbox"> {props.text} </div>
        </div>
    );
}

export function Q4(props) {
    return (
        <div className="quadrant4 parentStyle" style={{backgroundColor: props.color}} >
            <p>{props.text} </p>
        </div>
    );
}