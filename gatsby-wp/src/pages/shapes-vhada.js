import './shapes-vhada.css'
import * as React from "react"
import { Link } from "gatsby"
import { Circle, Diamond, TextArea, CenterText } from '../components/ShapeComps'

import Seo from "../components/seo"

 

const shapes = () => (
  
<div class="grid-container">

  <Diamond></Diamond>
  <Circle></Circle>
  <TextArea></TextArea>
  <CenterText></CenterText>
  
</div>

)

export const Head = () => <Seo title="Vishal's Shape Page" />

export default shapes