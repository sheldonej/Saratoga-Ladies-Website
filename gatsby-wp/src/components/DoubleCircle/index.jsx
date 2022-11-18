// import * as React from 'react'
import React, { useState } from 'react';
import "./matt_shapes.css"
import { CirclesContainer, ContentContainer, InnerCircleContainer } from './Elements'
import outerCircleImage from "../../images/cemetery/IMG8.jpg"
import innerCircleImage from "../../images/cemetery/IMG15.jpg"


// TODO: Add documentation

// make image height equals 100
function DoubleCircles(props) {

    const [circleOuterSize, setCircleOuterSize] = useState("l");
    const [circleInnerSize, setCircleInnerSize] = useState("m");

  return (
        <ContentContainer>
            <CirclesContainer>
                <div id={"circle-" + circleOuterSize} className="overflow-hidden">
                    <img src={outerCircleImage} className="circle-image" alt="outer circle" />

                    <div className="child">
                        <div id={"circle-" + circleInnerSize} className="overflow-hidden">
                            <img src={innerCircleImage} className="circle-image" alt="inner circle" />
                        </div>
                    </div>
                </div>
            </CirclesContainer>
        </ContentContainer>
  );
}

// (TODO): move utilized component to element.js, and utilize js version of css

export default DoubleCircles