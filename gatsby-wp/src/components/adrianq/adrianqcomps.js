import * as React from 'react'

export function Q1() {
    return (
            <div style={{height: "400px", width: "50%", backgroundColor: "blue"}}>
                <div style={{ 
                    height: "200px", 
                    width: "200px", 
                    backgroundColor: "black", 
                    margin: "100px", 
                    transform: "rotate(45deg)"}}/>
            </div>
            
    );
}

export function Q2() {
    return (
        <div style={{height: "400px", width: "50%", backgroundColor: "green"}}>
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

export function Q3() {
    return (
        <div style={{display: "flex", height: "400px", width: "50%", backgroundColor: "pink", justifyContent: "center", alignItems: "center"}}>       
            <div style={{
                height: "325px",
                width: "300px",
                outline: "thick solid black",
                backgroundColor: "white",
                textAlign: "left"
            }}>
                <div style={{margin: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>               
            </div>
        </div> 
    );
}

export function Q4() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "400px", width: "50%", backgroundColor: "orange"}}>
            <div style={{
                height: "300px",
                width: "300px",
                textAlign: "center"
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
        </div>
        
    );
}