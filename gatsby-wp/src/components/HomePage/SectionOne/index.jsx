import * as React from "react"
import {} from './SectionElements' 
import LinedHeader from "../../LinedHeader/index.jsx"
import {ContentContainer, TextSection, Text, ButtonSection, LearnButton} from './SectionElements'

import {SectionOneHeader, SectionOneParagraph1, SectionOneParagraph2, SectionButton} from '../../../assets/text/HomeText'

/* ------------------------------------------------------------------------ */
/* TASK: MAKE THIS CSS INTO A STYLED COMPONENT CSS LIKE LINED HEADER  USES  */
/* ------------------------------------------------------------------------ */

const SectionOne = () => {
    return (
        <ContentContainer>
            <LinedHeader>{SectionOneHeader}</LinedHeader> 
            
                <TextSection>
                <Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {SectionOneParagraph1}
                </Text>
                <Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {SectionOneParagraph2}
                </Text>
                </TextSection>
           
            <ButtonSection>
                <LearnButton>{SectionButton}</LearnButton>
            </ButtonSection>
        </ContentContainer>
    )
}

export default SectionOne;