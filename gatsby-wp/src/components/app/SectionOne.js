import * as React from "react"
import "./SectionOne.css"
import LinedHeader from "./LinedHeader"

const SectionOne = () => {
    return (
<div className = "section-header">
    {/* Make this a component */}
    <LinedHeader/>

    <div className = "flex vertical-center ">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

    <div className = "flex vertical-center">
    <button id="learn">Learn More About The Saratoga Ladies</button>
    </div>
</div>

    
    )
}

export default SectionOne;