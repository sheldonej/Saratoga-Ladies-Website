import React from "react"
import Layout from "../components/layout"
import "../components/jose_shapes.css"
import { Q1, Q2 , Q3, Q4, Q5} from "../components/jose_comps"

const IndexPage = () => (
  <Layout>
    <div style = {{ display: "flex", flexWrap: "wrap"}}>
      <Q1 />
      <Q2 />
      <Q3 />
      <Q4 /> 
    </div>

    <h1 style ={{ textAlign: "center"}}> TEST</h1>
    <p style ={{ textAlign: "center"}}>Jose Idrovo </p>
  </Layout>
)

export default IndexPage
