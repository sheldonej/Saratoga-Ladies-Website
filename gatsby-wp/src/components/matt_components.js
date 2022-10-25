import * as React from 'react'
import "../components/matt_shapes.css"



export function Q1() {
    return (
        <div className="quadrant1 parentStyle" >
            <div className="diamond"> </div>
        </div>
    );
}

export function Q2() {
    return (
        <div className="quadrant2 parentStyle" >
            <div className="circle"> </div>
        </div>
    );
}

export function Q3() {
    return (
        <div className="quadrant3 parentStyle" >
            <div className="textbox"> Some text </div>
        </div>
    );
}

export function Q4() {
    return (
        <div className="quadrant4 parentStyle" >
            This text is centered over 2 lines.
        </div>
    );
}