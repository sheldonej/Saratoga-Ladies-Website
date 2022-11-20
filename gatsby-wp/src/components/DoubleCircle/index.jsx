import React, { useState } from 'react';
import "./matt_shapes.css"
import { CirclesContainer, ContentContainer, InnerCircleContainer } from './Elements'
import outerCircleImage from "../../images/cemetery/IMG8.jpg"
import innerCircleImage from "../../images/cemetery/IMG15.jpg"


// TODO: Add documentation
// TODO: move unused files to depricated

function DoubleCircles(props) {

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