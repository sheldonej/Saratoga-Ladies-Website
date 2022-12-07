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