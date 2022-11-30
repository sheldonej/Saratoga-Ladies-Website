import * as React from "react"
import "../../index.css"
import "../app/footer.css"
import "../header.css"
import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube} from "react-icons/ai";
import { FooterData} from "../../Constants.js"
import { FirstColumn, SecondColumn, ThirdColumn, Bar, Button, TextBox, BarTextBox, ListFormat, LinkStyles, SecondMenuFooter, Title, MediaBox, SecondTextBox, Logo} from "./Elements.js"

function FooterComp(props) {
  return (
      <footer className="filler-height-200" style={
          {display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

            <FirstColumn>
              <Title> Our Mission  </Title>
              <TextBox style={{height:"50%"}}>  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum 
                explicabo reprehenderit optio amet ab temporibus asperiores quasi 
                cupiditate. Voluptatum ducimus voluptates voluptas.
              </TextBox>
              <MediaBox>
               <a href="link"><AiFillInstagram></AiFillInstagram></a>
               <a href="link"><AiFillFacebook></AiFillFacebook></a>
               <a href="link"><AiFillTwitterSquare></AiFillTwitterSquare></a>
               <a href="link"><AiFillYoutube></AiFillYoutube></a>
              </MediaBox>
            </FirstColumn>


            <SecondColumn>
                <Title> Join Our Email </Title>
                  <SecondTextBox>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
                </SecondTextBox>
                <Button> Sign Up </Button> 
            </SecondColumn>


            <ThirdColumn>
            <Title>Links</Title>
                  <ListFormat>
                  {FooterData.map((item) => 
                            <li><LinkStyles to={item.path}> {item.title}</LinkStyles></li>
                       )  
                  }
                  </ListFormat>
        </ThirdColumn>

            <Bar>
              <BarTextBox> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </BarTextBox>
            </Bar>
      </footer>
  );
}
export default FooterComp;