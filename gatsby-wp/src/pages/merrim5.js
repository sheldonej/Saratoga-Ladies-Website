import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MatthewsPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center"}}>Matthew Merritt</h1>
    <p style={{ textAlign: "center"}}>This is basic text to test on a page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Matthew's Page" />

export default MatthewsPage
