import * as React from 'react'
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

export default DoubleCircles