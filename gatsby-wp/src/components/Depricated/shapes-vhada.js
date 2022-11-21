import './shapes-vhada.css'
import * as React from "react"
import { Circle, Diamond, TextArea, CenterText } from '../components/ShapeComps'

import Seo from "../components/seo"

 

const shapes = () => (
  
<div class="grid-container">

  <Diamond background = {"blue"} />
  <Circle background = {"green"}/>
  <TextArea background = {"pink"}  text ={"Text Area"}/>
  <CenterText background = {"orange"}  text = {"Text: In The Center"}/>
  
</div>

)

export const Head = () => <Seo title="Vishal's Shape Page" />

export default shapes