import * as React from 'react'
import "../components/DoubleCircle/DoubleCircle.css"
import outerCircleImage from "../images/cemetery/IMG8.jpg"
import innerCircleImage from "../images/cemetery/IMG15.jpg"



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

export function DoubleCircles(props) {

    return (
        <div id="double-circles">

            {/* outer div*/}
            <div className="parent">
                {/* outer circle */}
                <div id="circle-large" className="overflow-hidden">
                    <img src={outerCircleImage} className="circle-image" alt="outer circle" />


                    {/* inner div */}
                    <div className="child">
                        {/* inner circle */}
                        <div id="circle-medium" className="overflow-hidden">
                            <img src={innerCircleImage} className="circle-image" alt="inner circle" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// (TODO): Use props to adjust the size of images and the sizes of circles
export function SiteComponent4(props) {
    return (
        <div className="flex-direction" >
            {/* Add a text and circles elements */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.

            </p>
            <DoubleCircles {...props} />
        </div>
    )

}