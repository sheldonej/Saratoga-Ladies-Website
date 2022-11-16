/* In the footer, we will be entering the colors of each component, eventually
      I am also going to want to get rid of the borders except for the middle one which will have distance between
      components (10px for large screen). Four components in total. 
      
      Style components
      convert everything to style components
      clean up all the divs and put it into depricated
      update on local host:8000 then update it to 
*/
    
import * as React from "react"
import "../../index.css"
import "../app/footer.css"
import "../header.css"
import {Link} from "gatsby"
import { AiFillGithub } from "react-icons/ai";
import { FooterData } from "../../Constants.js"


function FooterComp(props) {
    return (
        <footer className="filler-height-200" style={
            {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div className="first_column">
                <button className="button"> 
                  Click to donate to the Saratoga Ladies
                </button>
              </div>

              <div className="second_column">
                  <div className="mission-statement-title" style ={{height: "30%"}}> Mission Statement</div>
                    <div className="text-box" style={{ height: "70%", width: "50%", fontSize: "xx-small"}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                  </div>
                </div>


              <div className="third_column">
                  <div className="menu-footer">
                  {FooterData.map((item) => {
                        return ( 
                          <ul className="list-format">
                            <li>
                            <Link to={item.path} className="link-styles">{item.title}</Link>
                            </li>
                          </ul>
                         )  
                        })}
                  </div>
              </div>

              <div className="Bar">
                <div className="text-box"> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </div>
              </div>
        </footer>
    );
}
export default FooterComp;