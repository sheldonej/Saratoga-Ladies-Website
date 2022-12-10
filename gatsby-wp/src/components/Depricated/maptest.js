import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GoogleMap from '../components/ggm'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>This is a map testingpage</h1>
      <p>Welcome to map site.</p>
      <p>Now go build something great.</p>
          <p>Below will be a map testing about google platform API</p>
      <GoogleMap />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
