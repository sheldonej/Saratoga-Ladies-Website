import * as React from "react"
import "./ShapeComps.css"

export const Circle = ({background, text}) => {
    return (
        <div style = { {backgroundColor:background}} class="item2">
        <div class="circles"></div>
        </div>
    );
}

export const Diamond = ({background, text}) => {
    return (
        <div style = {{ backgroundColor:background}} class="item1">
        <div id = "diamond"></div>
      </div>   

    );
}

export const TextArea = ({background, text}) => {
    return (
        <div style = {{ backgroundColor: background}} class="item3">
        <textarea id="text-box">{text}</textarea>
      </div>   

    );
}

export const CenterText = ({background, text}) => {
    return (
        <div style = {{ backgroundColor:background}} class="item4">
        <p id="ct">{text}</p>
      </div>   

    );
}

