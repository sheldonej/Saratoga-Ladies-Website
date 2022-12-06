import * as React from "react"
import "../../index.css"
import "./footer.css"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'
import { FooterData } from "../../Constants.js"
import { FooterSection, FooterWrapper, FooterTop, FooterBottomContent, FooterBottom, FooterSectionList, FooterSectionTitle, 
   FirstColumn, SecondColumn, ThirdColumn,  FooterSectionIconWrapper, FooterIcon } from "./Elements.js"

import {FooterSectionOneHeader, FooterSectionOneParagraph, FooterSectionTwoHeader, FooterSectionTwoParagraph, FooterSectionTwoButton, 
  FooterSectionThreeHeader, FooterSectionFourItem1, FooterSectionFourItem2, FooterSectionFourItem3} from '../../assets/text/HomeText'

function FooterComp(props) {
  return (
    <FooterWrapper>
      <FooterTop>

          <FirstColumn>
            {/* ------------------------------------------------------------------------------ */}
            <FooterSectionTitle>{FooterSectionOneHeader}</FooterSectionTitle>
            <p>  
             {FooterSectionOneParagraph}
            </p>
            <FooterSectionIconWrapper>
                      <FooterIcon><FaLinkedinIn size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaFacebookF  size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaInstagram  size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaYoutube  size={'1.25em'} color={'#fff'}/></FooterIcon> 
            </FooterSectionIconWrapper>
           {/* ------------------------------------------------------------------------------ */}   
          </FirstColumn>  
  

 
            <SecondColumn>
              {/* ------------------------------------------------------------------------------ */}
              <FooterSectionTitle>{FooterSectionTwoHeader}</FooterSectionTitle>
              <p>
                {FooterSectionTwoParagraph}
              </p>
              <button>{FooterSectionTwoButton}</button> 
              {/* ------------------------------------------------------------------------------ */}   
            </SecondColumn>  

     
 
          <ThirdColumn>
            {/* ------------------------------------------------------------------------------ */}
            <FooterSectionTitle>{FooterSectionThreeHeader}</FooterSectionTitle>
            <FooterSectionList>
              { FooterData.map((item) => {
                  return <li><a /*to={item.path}*/> {item.title}</a></li>
              })}
            </FooterSectionList>
            {/* ------------------------------------------------------------------------------ */}   
          </ThirdColumn>  

      </FooterTop>
      <FooterBottom>
        <FooterBottomContent>
            {FooterSectionFourItem1} &nbsp; | &nbsp; {FooterSectionFourItem2} &nbsp; | &nbsp; {FooterSectionFourItem3}
        </FooterBottomContent>
        <FooterBottomContent>
            An <div style={{color: 'red'}}> &nbsp;RCOS&nbsp; </div> Project
        </FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>

  );
}
export default FooterComp;



/*





      <footer  style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

            <FooterSection>
              <Title> Our Mission  </Title>
              <TextBox style={{height:"50%"}}>  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum 
                explicabo reprehenderit optio amet ab temporibus asperiores quasi 
                cupiditate. Voluptatum ducimus voluptates voluptas.
              </TextBox>
              <FooterSectionIconWrapper>
                        <FooterIcon><FaLinkedinIn size={'1.25em'} color={'#000'}/></FooterIcon>
                        <FooterIcon><FaFacebookF  size={'1.25em'} color={'#000'}/></FooterIcon>
                        <FooterIcon><FaInstagram  size={'1.25em'} color={'#000'}/></FooterIcon>
                        <FooterIcon><FaYoutube  size={'1.25em'} color={'#000'}/></FooterIcon> 
              </FooterSectionIconWrapper>     
  
      </FooterSection>


      <FooterSection>
          <Title> Join Our Email </Title>
            <SecondTextBox>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.
          </SecondTextBox>
          <Button> Sign Up </Button> 
      </FooterSection>


      <FooterSection>
        <Title>Links</Title>
        <ListFormat>
          {FooterData.map((item) => 
                    <li><LinkStyles to={item.path}> {item.title}</LinkStyles></li>
              )  
          }
        </ListFormat>
      </FooterSection>

      <Bar>
        <BarTextBox> CopyRight 2022 | <AiFillGithub /> | An RCOS Project </BarTextBox>
      </Bar>
</footer>

















*/