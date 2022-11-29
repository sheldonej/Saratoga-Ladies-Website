import * as React from "react"
import "../../index.css"
import "../app/footer.css"
import "../header.css"
import {Link} from "gatsby"
import { AiFillGithub } from "react-icons/ai";
import { FooterData, FooterDataTwo } from "../../Constants.js"
import { FirstColumn, SecondColumn, ThirdColumn, Bar, Button, TextBox, BarTextBox, MenuFooter, ListFormat, LinkStyles, SecondMenuFooter, Title} from "./Elements.js"

function FooterComp(props) {
  return (
      <footer className="filler-height-200" style={
          {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

            <FirstColumn>
              <Title style={{ textAlign: "unset" }}> Our Mission </Title>
              <Button>
                Click to donate to the Saratoga Ladies
              </Button>
            </FirstColumn>


            <SecondColumn>
                <Title> Join Our Email</Title>
                  <TextBox>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                </TextBox>
            </SecondColumn>


            <ThirdColumn>
            <Title style={{textAlign:"end"}}>Links</Title>
                <MenuFooter>
                  <ListFormat>
                  {FooterData.map((item) => 
                            <LinkStyles to={item.path}> {item.title}</LinkStyles>
                       )  
                  }
                  </ListFormat>
                </MenuFooter>

                <SecondMenuFooter>
                  <ListFormat>
                  {FooterDataTwo.map((item) =>
                            <LinkStyles to={item.path}> {item.title}</LinkStyles>
                       )  
                  }
                  </ListFormat>
                </SecondMenuFooter>
            </ThirdColumn>

            <Bar>
              <BarTextBox> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </BarTextBox>
            </Bar>
      </footer>
  );
}
export default FooterComp;