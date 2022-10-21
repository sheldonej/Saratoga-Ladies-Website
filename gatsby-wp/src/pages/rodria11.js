import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Q1, Q2, Q3, Q4} from "../components/adrianq/adrianqcomps"

const rodria11 = () => (
  <Layout>
    <h1 style={{ textAlign: "center"}}>ADRIAN RODRIGUEZ</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna 
       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Q1 background_color = "blue" />
      <Q2 background_color = "green"/>
      <Q3 background_color = {"pink"} text = {"Hello World! :') "}/>
      <Q4 background_color = {"orange"} text = {"Goodbye World! :'( "}/>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Adrian's Page" />

export default rodria11