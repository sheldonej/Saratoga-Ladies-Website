import * as React from "react"
import "./Shapes.css"

export const Square = ({background, text}) => {
    return (
        <div style = { {backgroundColor:background}} class="component1">
            <div id ="square"></div>
        </div>
    );
}
export const TextAr = ({background, text}) => {
    return (
        <div style = { {backgroundColor:background}} class="component3">
            <textarea id ="textar"></textarea>
        </div>
    );
}
export const CenteredTextAr = ({background, text}) => {
    return (
        <div style = { {backgroundColor:background}} class="component4">
            <p id ="centeredtextar">{text}</p>
        </div>
    );
}
export const Circle = ({background, text}) => {
    return (
        <div style = { {backgroundColor:background}} class="component2">
            <div class="circles">{text}</div>
        </div>
    );
}