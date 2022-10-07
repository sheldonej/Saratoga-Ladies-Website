import './hadav.css'
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
 

const VishalsPage = () => (
  <Layout>
    <div class = "box">
    <h1 style={{ textAlign: "center", color:"white"}}>VISHAL HADA</h1>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Vishal's Page" />

export default VishalsPage