import * as React from "react"
import "../../index.css"
import "../header.css"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import FooterComp from "./FooterContent"
import HeaderContent from "./HeaderContent"

function Header(props) {
  return (
    <header>
      <HeaderContent/>
    </header>
  )
}
 
function Footer(props) {
    return  (
      <footer className="filler-height-200" style={
        {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          <FooterComp colorOne={"red"}></FooterComp>
      </footer>
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