import * as React from "react"
import Seo from "../components/seo"
import PageWrapper from "../components/PageWrapper"
import SlideshowBanner from "../components/SlideshowBanner"
import PageContentContainer from "../components/PageContentContainer"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"






const IndexPage = () => (
  <PageWrapper >
    <Seo title="Home" />
    <SlideshowBanner />
    <PageContentContainer height={400} > 1 </PageContentContainer> 
    <PageContentContainer height={400} dropShadow> 2 </PageContentContainer> 
    <PageContentContainer height={400} > 3 </PageContentContainer> 
    <PageContentContainer height={400} dropShadow> 4 </PageContentContainer> 
    <PageContentContainer height={400}> 5 </PageContentContainer> 
  </PageWrapper>
)

/*NOTE From Sheldon: Check to see if we can Remove this below Code! */
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
