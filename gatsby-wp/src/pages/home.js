import * as React from "react"
import '../index.css'
import Seo from "../components/seo"

import PageWrapper from "../components/PageWrapper/index.jsx"
import HeroSection from "../components/HomePage/HeroSection/index.jsx"
import SlideshowBanner from "../components/app/SlideshowBanner"
import PageContentContainer from "../components/app/PageContentContainer"

import SectionOne from "../components/HomePage/SectionOne/index.jsx"
import SectionThree from "../components/HomePage/SectionThree/index.jsx"

import DoubleCircle from "../components/DoubleCircle/index.jsx"
 
const LandingPage = () => (
  <React.Fragment>
    <PageWrapper >
      <HeroSection />
      <PageContentContainer height={'auto'} >
        <SectionOne />
      </PageContentContainer> 
      <PageContentContainer height={400} >
        <React.Fragment />
      </PageContentContainer> 
      <PageContentContainer height={400} >
        <SectionThree />
      </PageContentContainer> 
      <PageContentContainer height={400} >
        <React.Fragment />
      </PageContentContainer> 
      <PageContentContainer height={400} >
        <React.Fragment />
      </PageContentContainer> 
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

export default LandingPage