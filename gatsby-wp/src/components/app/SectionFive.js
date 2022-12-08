import * as React from "react"
import "./SectionFive.css"
import firstImage from "../../assets/images/cemetery/C130(2).jpg"
import secondImage from "../../assets/images/cemetery/ChildFoldingFlag.jpg"
import thirdImage from "../../assets/images/cemetery/Shop.jpg"
import LinedHeader from "./LinedHeader"



const SectionFive = () => {
    return (
<div className="section-header">
<LinedHeader></LinedHeader>
<div className = "flex">

    {/* Make these a component */}
    
<div className = "flow-col">
    <img className="dotImg"  src={firstImage} alt="Avatar"/>
    <div class="dots"></div>
    <div id="dotcircle"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 </div>
      
 <div className = "flow-col">
    <img className="dotImg"  src={secondImage} alt="Avatar"/>
    <div class="dots"></div>
    <div id="dotcircle"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 </div>

 <div className = "flow-col">
    <img className="dotImg"  src={thirdImage} alt="Avatar"/>
    <div class="dots"></div>
    <div id="dotcircle"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 </div>
    
</div>
</div>
    
    )
}

export default SectionFive;