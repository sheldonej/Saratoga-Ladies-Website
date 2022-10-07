import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center"}}> Fangxin Liu / Felix </h1>
    <h1 style={{ textAlign: "center"}} > Rcs ID : liuf8 </h1>
    <p>Welcome to test page!</p>
    <Link to="/">Click here to homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="FelixPage" />

export default SecondPage
