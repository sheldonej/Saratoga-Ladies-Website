/* In the footer, we will be entering the colors of each component, eventually
      I am also going to want to get rid of the borders except for the middle one which will have distance between
      components (10px for large screen). Four components in total. 
      
      Make functional component copy the divs 
*/
    
import * as React from "react"
import "../../index.css"
import "../app/footer.css"
import "../header.css"
import {Link, navigate} from "gatsby"
import IMG from '../../images/SaratogaLadiesLogo.png'


function FooterComp(props) {
    return (
        <footer className="filler-height-200" style={
            {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div className="first_column" style ={
                {display: "flex"}}>
                <img src={IMG} style={{objectFit: "contain"}}/>
              </div>


              <div className="second_column" style ={
                {display:"flex", justifyContent: "center", alignItems: "center"}}>
                200 Duell Rd, Schuylerville, NY, 12871
                </div>


              <div className="third_column">
              <div className="container1">
                <Link to="/mappage">Site Map</Link>
              </div>

              </div>

              <div className="Bar" style={{display: "flex"}}>
              <div className="textBox"> CopyRight 2022 | An RCOS Project </div>
              </div>
        </footer>
    );
}
export default FooterComp;