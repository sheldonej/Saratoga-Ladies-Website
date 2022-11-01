import * as React from "react"
import "../../index.css"
import "../jose_shapes.css"
import "../header.css"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import FooterComp from "./FooterContent"

const HeaderData = [
  {
    title: "TITLE A",
    path: "a",
    icon: "a",
    cName: "a"
  },

  {
    title: "TITLE B",
    path: "b",
    icon: "b",
    cName: "b"
  },

  {
    title: "TITLE C",
    path: "c",
    icon: "c",
    cName: "c"
  },

  {
    title: "TITLE D",
    path: "d",
    icon: "d",
    cName: "d"
  }

];

function Header(props) {
  const [display, setDisplay] = useState( 'none' )

  function handleClick() {
    if (display == 'none'){
      setDisplay( 'block' )
    }
    else {
      setDisplay( 'none' )
    }
  }
  
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
        <React.Fragment>
          <div className="page-wrapper">
            <Header />
            { this.props.children }
          </div>
          <Footer/>
        </React.Fragment>
      )
    }
}


export default PageWrapper