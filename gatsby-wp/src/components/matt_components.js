import * as React from 'react'
import "../components/matt_shapes.css"
import example from "../images/example.png"



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
// change name of the component to double circle
// (TODO): use usestate(for functional components - set up logic based off of "s" "m" "l" for circles) 
// that would adjust the size of the circles (from props input)
// (TODO): add the new double circle into a larger component that uses "flex row (css) for styling"
export function DoubleCircles(props) {

    return (
        <div>

            {/* outer div*/}
            <div className="parent">
                {/* outer circle */}
                <div id="circle-large" class="overflow-hidden"> medium
                    <img src={example} alt="outer circle image" />


                    {/* inner div */}
                    <div className="child" src={example} alt="example">
                        {/* innter circle */}
                        <div id="circle-medium" class="overflow-hidden">
                            <img src={example} alt="outer circle image" />

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