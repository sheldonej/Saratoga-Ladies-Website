import * as React from 'react'

export function Q1(props) {
    return (
            <div style={{height: "400px", width: "50%", backgroundColor: props.background_color}}>
                <div style={{ 
                    height: "200px", 
                    width: "200px", 
                    backgroundColor: "black", 
                    margin: "100px", 
                    transform: "rotate(45deg)"}}/>
            </div>
    );
}

export function Q2(props) {
    return (
        <div style={{height: "400px", width: "50%", backgroundColor: props.background_color}}>
            <div style={{
                height: "200px",
                width: "200px",
                backgroundColor: "yellow",
                borderRadius: "50%",
                margin: "100px"
            }}/>
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