import * as React from 'react'
import "../components/matt_shapes.css"



export function Q1(props) {
    return (
        <div className="quadrant1" style={{ backgroundColor: props.color }} >
            <div className="diamond"> </div>
        </div>
    );
}

export function Q2(props) {
    return (
        <div className="quadrant2" style={{ backgroundColor: props.color }} >
            <div className="circle"> </div>
        </div>
    );
}

export function Q3(props) {
    return (
        <div className="quadrant3" style={{ backgroundColor: props.color }} >
            <div className="textbox"> {props.text} </div>
        </div>
    );
}

export function Q4(props) {
    return (
        <div className="quadrant4" style={{ backgroundColor: props.color }} >
            <p>{props.text} </p>
        </div>
    );
}


// components to be used for page component 4 (in development)
export function Component4(props) {
    return (
        <div>
            <div id="circle-large" className="parent"> medium
                <div id="circle-medium" className="child">

                </div>
            </div>

        </div>

    );
}