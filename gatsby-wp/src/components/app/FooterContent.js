/* In the footer, we will be entering the colors of each component, eventually
      I am also going to want to get rid of the borders except for the middle one which will have distance between
      components (10px for large screen). Four components in total. 
      
      Make functional component copy the divs 
*/
    
import * as React from "react"
import "../../index.css"
import "../app/footer.css"
import "../header.css"


function FooterComp(props) {
    return (
        <footer className="filler-height-200" style={
            {display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: props.colorOne}}>
              <div className="ColumnNoBorder" style={{ backgroundColor: props.colorOne}}>
                </div>
              <div className="Columns" style={{
                backgroundColor: props.colorTwo,
                }}>
                </div>
              <div className="Columns" style={{backgroundColor: props.colorOne }
                }></div>
              <div className="Bar" style={{            
                }}></div>
        </footer>
    );
}

export default FooterComp;