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
import { AiFillGithub } from "react-icons/ai";
import { FooterData } from "../../Constants.js"

//let AiFillGithub = (<></>);
function FooterComp(props) {
    return (
        <footer className="filler-height-200" style={
            {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div className="first_column" style={{
                display:"flex", justifyContent: "center"}}>
                <button className="button"> Click to donate to the Saratoga Ladies</button>
              </div>


              <div className="second_column" style ={
                {display:"flex", flexWrap: "wrap"}}>
                  <div className="mission-statement-title"> Mission Statement</div>
                  <div className="text-box" style={{ height: "50%", width: "100%", fontSize: "xx-small"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                  </div>
                </div>


              <div className="third_column" style={{display: "flex", alignItems: "center"}}>
                  <div className="menu-footer">
                  {FooterData.map((item) => {
                        return ( 
                            <li>
                            <Link to={item.path} className="link-styles">{item.title}</Link>
                            </li>
                         )  
                        })}
                  </div>

              </div>

              <div className="Bar" style=
              {{display: "flex"}}>
              <div className="text-box"> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </div>
              </div>
        </footer>
    );
}
export default FooterComp;