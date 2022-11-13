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
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

function FooterComp(props) {
    return (
        <footer className="filler-height-200" style={
            {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div className="first_column" style ={
                {display: "flex"}}>
                <img src={IMG} style={{objectFit: "contain"}}/>
              </div>


              <div className="second_column" style ={
                {display:"flex", justifyContent: "center", margin: "auto"}}>
                  <div className="textBox">
                    Mission Statement: 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?

                  </div>
                </div>


              <div className="third_column">
              <div className="textBox">
                  <ul className="menu-footer">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                  </ul>
              </div>

              </div>

              <div className="Bar" style=
              {{display: "flex", justifyContent: "center", margin: "auto"}}>
              <div className="textBox"> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </div>
              </div>
        </footer>
    );
}
export default FooterComp;