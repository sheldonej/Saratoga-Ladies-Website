// import * as React from 'react'
import React, { useState } from 'react';
import "./matt_shapes.css"
import outerCircleImage from "../../images/cemetery/IMG8.jpg"
import innerCircleImage from "../../images/cemetery/IMG15.jpg"


// components to be used for page component 4 (in development)
// change name of the component to double circle
// (TODO): use usestate(for functional components - set up logic based off of "s" "m" "l" for circles) 
// that would adjust the size of the circles (from props input)
// (TODO): add the new double circle into a larger component that uses "flex row (css) for styling"

// make image height equals 100
function DoubleCircles(props) {

    const [circleOuterSize, setCircleOuterSize] = useState("l");
    const [circleInnerSize, setCircleInnerSize] = useState("m");

  return (
    <div id="double-circles">

        {/* outer div*/}
        <div className="parent">
            {/* outer circle */}
            <div id={"circle-" + circleOuterSize} className="overflow-hidden">
                <img src={outerCircleImage} className="circle-image" alt="outer circle" />
                {/* inner div */}
                <div className="child">
                    {/* inner circle */}
                    <div id="circle-m" className="overflow-hidden">
                        <img src={innerCircleImage} className="circle-image" alt="inner circle" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// convert above to style css 


export function SectionOne(props) {
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

// (TODO): move utilized component to element.js, and utilize js version of css

export default DoubleCircles