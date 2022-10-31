import * as React from "react"

function Header(props) {
        return (
          <header>
            <div className="header-wrapper ">
            
              <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
            </div>
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