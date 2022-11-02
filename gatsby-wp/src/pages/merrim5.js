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
        {/* (TODO): Utilize prop to select image */}
        <SiteComponent4 image={"example"}/>
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
