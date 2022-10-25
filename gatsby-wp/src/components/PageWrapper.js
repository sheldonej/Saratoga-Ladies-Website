import * as React from "react"
import '../index.css'

function Header(props) {
        return (
          <header>
            
          </header>
        )
}

function Footer(props) {
    return  (
      <footer className="filler-height-200" style={
        {backgroundColor: props.color}}>
          <div className="text" style={{font: props.fontType}}> {props.text} </div> 
        
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
          <Footer color={""} fontType={"15px Arial, serif"} text={"Test text"}/>
        </React.Fragment>
      )
    }
}


export default PageWrapper