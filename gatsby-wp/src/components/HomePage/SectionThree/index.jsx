import * as React from "react"
import { ContentContainer, SectionOneThirdContainer, SectionTwoThirdContainer,
    SectionWrapper, SectionPreHeaderText  } from './SectionElements' 
import DoubleCircle from "../../DoubleCircle/index.jsx"

import {SectionThreeHeader, SectionThreeSubHeader, SectionThreeParagraph1} from '../../../assets/text/HomeText'

const SectionThree = () => {
    return (
        <ContentContainer>
            <SectionTwoThirdContainer>
                <SectionWrapper>
                    <SectionPreHeaderText>
                        {SectionThreeHeader}
                    </SectionPreHeaderText>
                    <h2> {SectionThreeSubHeader} </h2> 
                    <p>{SectionThreeParagraph1}</p>
                </SectionWrapper>   
            </SectionTwoThirdContainer>
            <SectionOneThirdContainer>
                <DoubleCircle circle1-size={"m"} circle2-size={"l"}/>
            </SectionOneThirdContainer>
        </ContentContainer>
    )
}
 
export default SectionThree;