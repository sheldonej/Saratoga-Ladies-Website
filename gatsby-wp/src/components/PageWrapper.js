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
      <footer className="filler-height-200">
  
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
          <Footer />
        </React.Fragment>
      )
    }
}


export default PageWrapper