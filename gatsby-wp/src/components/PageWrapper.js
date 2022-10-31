import * as React from "react"
import '../index.css'
import "../components/jose_shapes.css"
import "../components/header.css"
import { Link, navigate } from "gatsby"
import { useState } from 'react'

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
    </header>
  )
}

function Footer(props) {
    return  (
      <footer className="filler-height-200" style={
        {display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: props.color}}>
          <div className="Columns" style={{backgroundColor: props.colorOne}}></div>
          <div className="Columns" style={{
            backgroundColor: props.colorTwo, borderLeftStyle: "dotted", borderRightStyle: "dashed"}}></div>
          <div className="Columns" style={{backgroundColor: props.colorOne}}></div>
          <div className="Bar"></div>
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
          <Footer colorOne={"magenta"} colorTwo={"red"} fontType={"15px Arial, serif"} text={"Test text"}/>
        </React.Fragment>
      )
    }
    /* In the footer, we will be entering the colors of each component, eventually
      I am also going to want to get rid of the borders except for the middle one which will have distance between
      components (10px for large screen). Four components in total. */
}


export default PageWrapper