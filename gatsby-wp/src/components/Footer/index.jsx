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
import { FirstColumn, SecondColumn, ThirdColumn, Bar, Button, TextBox, BarTextBox, MenuFooter, MissionStatementTitle, ListFormat, DonationTitle, LinkTitle, LinkStyles } from "./Elements.js"

function FooterComp(props) {
  return (
      <footer className="filler-height-200" style={
          {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <FirstColumn>
              <DonationTitle>Donations</DonationTitle>
              <Button>
                Click to donate to the Saratoga Ladies
              </Button>
            </FirstColumn>


            <SecondColumn>
                <MissionStatementTitle style ={{height: "30%"}}> Mission Statement</MissionStatementTitle>
                  <TextBox style={{ height: "70%", width: "50%", fontSize: ".5em"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                </TextBox>
            </SecondColumn>


            <ThirdColumn>
            <LinkTitle>Links</LinkTitle>
                <MenuFooter>
                {FooterData.map((item) => {
                      return ( 
                        <ListFormat>     
                          <Link to={item.path} className="link-styles">
                            <li> {item.title} </li>
                          </Link>
                        </ListFormat>
                       )  
                      })}
                </MenuFooter>
            </ThirdColumn>

            <Bar>
              <BarTextBox> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </BarTextBox>
            </Bar>
      </footer>
  );
}
export default FooterComp;