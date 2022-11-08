import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/matt_shapes.css"
import { Q1, Q2, Q3, Q4, SiteComponent4} from "../components/matt_components"

const MatthewsPage = () => (
  <Layout>
    
    <h1 style={{ textAlign: "center"}}>Matthew Merritt</h1>
      <div>
        {/* (TODO): Utilize prop to select image 

        // TODO: Change class to className
        

        Size Props
        * Notes: sizes for circles: s: small, m: medium, l: large
        * perameters: circle1-size, circle2-size
        * Reqiurements: The circle1-size is smaller than circle2-size
        
        Image Props
        * circle1-image: 
        * circle2-image:
        * Reqiurements: destination must be to a valid file within the /images/ file
        
        */}

        <SiteComponent4 circle1-size={"s"} circle2-size={"m"} circle1-image={"/"} circle2-image={"s"}/>

        <img src={require("../images/example.png")} alt="example from site"/>
      </div>

      <Q1 color={"lightblue"}/>
      <Q2 color={"lightgreen"}/>
      <Q3 color={"pink"} text={"thing1"}/>
      <Q4 color={"lightorange"} text={"Some more things as props"}/>

    <p style={{ textAlign: "center"}}>This is basic text to test on a page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Matthew's Page" />

export default MatthewsPage
