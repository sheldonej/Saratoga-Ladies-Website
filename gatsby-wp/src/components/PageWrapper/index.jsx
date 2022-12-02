import * as React from "react"
import "../../index.css"
import "../header.css"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import FooterContent from "../Footer/index.jsx"
import HeaderContent from "../Header/index.jsx"

function Header(props) {
  return (
    <header>
      <HeaderContent/>
    </header>
  )
}
 
function Footer(props) {
    return  (

      <FooterContent colorOne={"red"}></FooterContent>

    )
}

 class PageWrapper extends React.Component {
    constructor() {
      super();
      
    }

    render() {
      return (
        <>
          <div className="page-wrapper">
            <Header />
            { this.props.children }
          </div>
          <Footer/>
        </>
      )
    }
}


export default PageWrapper