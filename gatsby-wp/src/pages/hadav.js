import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VishalsPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center"}}>VISHAL HADA</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Vishal's Page" />

export default VishalsPage