import * as React from "react"
import '../index.css'
import "../components/jose_shapes.css"
import {Q1} from "../components/jose_comps"

function Header(props) {
        return (
          <header>
            
          </header>
        )
}

function Footer(props) {
    return  (
      <footer className="filler-height-200" style={
        {display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: props.color}}>
          <div className="ColumnNoBorder" style={{ backgroundColor: props.colorOne}}>
            </div>
          <div className="Columns" style={{
            backgroundColor: props.colorTwo, 
            }}>
            </div>
          <div className="Columns" style={{backgroundColor: props.colorOne }}></div>
          <div className="Bar" style={{            
            }}></div>
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
          <Footer colorOne={"#2565AE"} colorTwo={"#2565AE"} fontType={"15px Arial, serif"} text={"Test text"}/>
        </React.Fragment>
      )
    }
    /* In the footer, we will be entering the colors of each component, eventually
      I am also going to want to get rid of the borders except for the middle one which will have distance between
      components (10px for large screen). Four components in total. */
}


export default PageWrapper