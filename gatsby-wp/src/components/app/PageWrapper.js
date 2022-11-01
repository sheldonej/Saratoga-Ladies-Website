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
      <div className="header-wrapper">
        <div className="container1">
          <Link to="/rodria11">Adrian's Webpage</Link>
        </div>
        <div className="container2">
          <Link to="/hadav">Vishal's Webpage</Link>
        </div>
        <div className="imageContainer" onClick={()=>navigate('/')}/>
        <div className="container3">
          <Link to="/merrim5">Matthew's Webpage</Link>
        </div>
        <div className="dropcontainer" onClick={()=>handleClick()}>
          DROP CONTAINER
          {HeaderData.map((item) => {
            return ( <div className="dropdown-content" style={{display: display}}>
              {item.title}
              </div> )
          })}
        </div>
        <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
      </div>
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