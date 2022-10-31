import * as React from 'react'
import "../components/jose_shapes.css"

export function Q1(props) {
    return (
        <div className="quadOne" style={{backgroundColor: props.color}}>
            <div className="diamond"> </div>
        </div>
    );
}
export function Q2(props) {
    return (
        <div className="quadTwo" style={{backgroundColor: props.color}}>
            <div className="circle"> </div>
         </div>
    );
}
export function Q3(props) {
    return (
        <div className="quadThree" style={{backgroundColor: props.color}}>
        <div className="rectangle"> 
              <div className="text"> {props.text} </div>
          </div>
        </div>
    );
}
export function Q4(props) {
    return (
        <div className="quadFour" style={{backgroundColor: props.color}}>
        <div className="random"> 
          <div className="text"> {props.text}</div>
        </div>
      </div>
    );
}

export function footCol(props){
    return (
        <div Columns = {{backgroundColor: props.colorOne}}></div>
    )
}