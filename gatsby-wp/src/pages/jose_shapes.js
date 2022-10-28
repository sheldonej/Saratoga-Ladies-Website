import React from "react"
import Layout from "../components/layout"
import "../components/jose_shapes.css"
import { Q1, Q2 , Q3, Q4, Q5} from "../components/jose_comps"

const IndexPage = () => (
  <Layout>
    <div style = {{ display: "flex", flexWrap: "wrap"}}>
      <Q1 color={"green"}/>
      <Q2 color={"blue"}/>
      <Q3 color={"red"} text={"bruh"} />
      <Q4 color={"purple"} text={"BRUH"} /> 
    </div>

    <h1 style ={{ textAlign: "center"}}> TEST</h1>
  </Layout>
)

export default IndexPage
