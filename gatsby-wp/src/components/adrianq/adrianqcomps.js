import * as React from 'react'
import { useState } from 'react'
import "./adrianqcomps.css"

export function Q1(props) {
    
    const [isHovering, setIsHovering] = useState(false)
    
    return (
            <div style={{height: "400px", width: "50%", backgroundColor: props.background_color}}>
                <div className="div-1" 
                     style={{ transform: isHovering ? "rotate(45deg) scale(1.1)" : "rotate(45deg)"}}
                     onMouseEnter={()=>setIsHovering(true)}
                     onMouseLeave={()=>setIsHovering(false)}/>
            </div>
    );
}

export function Q2(props) {
    
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div style={{height: "400px", width: "50%", backgroundColor: props.background_color}}>
            <div className='div-2' 
                 onClick={()=>setIsClicked(!isClicked)}
                 style={{ transform: isClicked ? "scale(0.5)" : ""}}/>
        </div>
            
    );
}

export function Q3(props) {
    return (
        <div style={{display: "flex", height: "400px", width: "50%", backgroundColor: props.background_color, justifyContent: "center", alignItems: "center"}}>       
            <div style={{
                height: "325px",
                width: "300px",
                outline: "thick solid black",
                backgroundColor: "white",
                textAlign: "left"
            }}>
                <div style={{margin: "10px"}}>
                {props.text}
                </div>               
            </div>
        </div> 
    );
}

export function Q4(props) {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "400px", width: "50%", backgroundColor: props.background_color}}>
            <div style={{
                height: "300px",
                width: "300px",
                textAlign: "center"
            }}>
            {props.text}
            </div>
        </div>
        
    );
}