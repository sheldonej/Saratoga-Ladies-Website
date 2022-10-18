import './shapes-vhada.css'
import * as React from "react"
import { Link } from "gatsby"
import Circle from '../components/Circle'

import Seo from "../components/seo"

 

const shapes = () => (
  
<div class="grid-container">
  
  <div class="item1">
    <div id = "diamond"></div>
  </div>
  <div class="item2">
    <Circle></Circle>
    </div>  
  <div class="item3">
    <textarea id="text-box">Text Area</textarea>
  </div>
  <div class="item4">
    <p id="ct">Text: In the Center</p>
  </div>


</div>

)

export const Head = () => <Seo title="Vishal's Shape Page" />

export default shapes