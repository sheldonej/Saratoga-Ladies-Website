import * as React from "react"
import '../index.css'
import Seo from "../components/seo"
import PageWrapper from "../components/app/PageWrapper"
import SlideshowBanner from "../components/app/SlideshowBanner"
import PageContentContainer from "../components/app/PageContentContainer"
import SectionOne from "../components/app/SectionOne"
import DoubleCircles from "../components/DoubleCircle/index"
import SectionFive from "../components/app/SectionFive"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"



 
const IndexPage = () => (
  <React.Fragment>
    <PageWrapper >
      <SlideshowBanner />
      <PageContentContainer height={'auto'} >
        <SectionOne />
      </PageContentContainer> 
    
      {/* THIS CODE ABOVE NEEDS TO BE IN THE THE PAGE CONTAINER COMPONENT AS FOLLOWS */}
      <PageContentContainer height={400} dropShadow> 2 </PageContentContainer> 
      <PageContentContainer height={400} > 3 </PageContentContainer> 
      <PageContentContainer height={400} dropShadow> 4 
        <DoubleCircles />
      </PageContentContainer> 
      <PageContentContainer height={'auto'}> <SectionFive/> </PageContentContainer> 
    </PageWrapper>
  </React.Fragment>
)

/*NOTE From Sheldon: Check to see if we can Remove this below Code! */
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
