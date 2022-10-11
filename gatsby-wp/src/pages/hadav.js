import './hadav.css'
import * as React from "react"
import { Link } from "gatsby"


import Seo from "../components/seo"

 

const VishalsPage = () => (
  <div id="VB">
    <div class = "box">
    <h1 style={{ color:"white"}}>VISHAL HADA</h1>
    <p>Hello!</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
   
  </div>
)

export const Head = () => <Seo title="Vishal's Page" />

export default VishalsPage