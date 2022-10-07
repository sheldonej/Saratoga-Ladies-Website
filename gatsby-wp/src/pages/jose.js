import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Centering Name On Website" />

    <div className="d-flex align-items-center justify-content-center customHeight borderGrey">Jose Idrovo</div>
    <h1 style ={{ textAlign: "center"}}> TEST</h1>
    <p style ={{ textAlign: "center"}}>Jose Idrovo </p>
  </Layout>
)

export default IndexPage
