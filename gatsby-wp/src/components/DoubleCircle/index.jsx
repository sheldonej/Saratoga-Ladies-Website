import React, { useState } from 'react';
import "./DoubleCircle.css"
import { CirclesContainer, ContentContainer, InnerCircleContainer } from './Elements'

// select images 
import outerCircleImage from "../../images/cemetery/IMG8.jpg"
import innerCircleImage from "../../images/cemetery/IMG15.jpg"

// Double Circles Component
function DoubleCircles(props) {

    // set the size of the circles used
    // supports "s" "m" and "l" for small medium and large circles respectively
    const [circleOuterSize, setCircleOuterSize] = useState("l");
    const [circleInnerSize, setCircleInnerSize] = useState("m");

    return (
        <ContentContainer>
            <CirclesContainer>
                <div id={"circle-" + circleOuterSize} className="overflow-hidden">
                    <img src={outerCircleImage} className="circle-image" alt="outer circle" />

                    <InnerCircleContainer>
                        <div id={"circle-" + circleInnerSize} className="overflow-hidden">
                            <img src={innerCircleImage} className="circle-image" alt="inner circle" />
                        </div>
                    </InnerCircleContainer>
                </div>
            </CirclesContainer>
        </ContentContainer>
    );
}
export default DoubleCircles