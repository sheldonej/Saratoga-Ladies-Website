import * as React from "react"
import "./ShapeComps.css"

export const Circle = () => {
    return (
        <div class="item2">
        <div class="circles"></div>
        </div>
    );
}

export const Diamond = () => {
    return (
        <div class="item1">
        <div id = "diamond"></div>
      </div>   

    );
}

export const TextArea = () => {
    return (
        <div class="item3">
        <textarea id="text-box">Text Area</textarea>
      </div>   

    );
}

export const CenterText = () => {
    return (
        <div class="item4">
        <p id="ct">Text: In the Center</p>
      </div>   

    );
}

