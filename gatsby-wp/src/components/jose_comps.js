import * as React from 'react'
import "../components/jose_shapes.css"

export function Q1() {
    return (
        <div className="quadOne">
            <div className="diamond"> </div>
        </div>
    );
}
export function Q2() {
    return (
        <div className="quadTwo">
            <div className="circle"> </div>
         </div>
    );
}
export function Q3() {
    return (
        <div className="quadThree">
        <div className="rectangle"> 
              <div className="text">Long block of text that continues for a while </div>
          </div>
        </div>
    );
}
export function Q4() {
    return (
        <div className="quadFour">
        <div className="random"> 
          <div className="text">Centered Text</div>
        </div>
      </div>
    );
}
export function Q5(col) {
    return (
        <div style={{height: "400px", width: "50%", backgroundColor: "green"}}>
            <div style = {{
                height: "400px",
                width: "400px",
                backgroundColor: col,
            }}/>
        </div>
    );
}