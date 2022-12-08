import * as React from "react"
import { ContentContainer, SectionOneThirdContainer, SectionHalfContainer , SectionTwoThirdContainer,
    SectionWrapper, SectionHeaderText , ImageFrame } from './SectionElements' 
import LinedHeader from "../../LinedHeader/index.jsx"


import {SectionTwoHeader, SectionTwoParagraph1, SectionTwoParagraph2} from '../../../assets/text/HomeText'

import IMG4 from '../../../images/cemetery/13-IMG_8507.jpg'

const SectionTwo = () => {
    return (
        <ContentContainer>
            <SectionOneThirdContainer>
                <ImageFrame style={{height: '90%', width: '90%'}}> <img src={IMG4}/> </ImageFrame>
            </SectionOneThirdContainer>
            <SectionTwoThirdContainer>
                <SectionWrapper>
                    <LinedHeader>{SectionTwoHeader}</LinedHeader> 
                    <p>{SectionTwoParagraph1}</p>
                    <p>{SectionTwoParagraph2}</p>
                </SectionWrapper>   
            </SectionTwoThirdContainer>
        </ContentContainer>
    )
}
 
export default SectionTwo;