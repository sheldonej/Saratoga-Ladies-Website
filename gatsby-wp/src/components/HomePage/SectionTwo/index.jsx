import * as React from "react"
import { ContentContainer, SectionOneThirdContainer, SectionHalfContainer , SectionTwoThirdContainer,
    SectionWrapper, SectionHeaderText , ImageFrame } from './SectionElements' 
import LinedHeader from "../../LinedHeader/index.jsx"
//import DoubleCircle from "../../DoubleCircle/index.jsx"

import IMG4 from '../../../images/cemetery/13-IMG_8507.jpg'

const SectionTwo = () => {
    return (
        <ContentContainer>
            <SectionOneThirdContainer>
                <ImageFrame style={{height: '90%', width: '90%'}}> <img src={IMG4}/> </ImageFrame>
            </SectionOneThirdContainer>
            <SectionTwoThirdContainer>
                <SectionWrapper>
                    <LinedHeader>Lorem ipsum</LinedHeader> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </SectionWrapper>   
            </SectionTwoThirdContainer>
        </ContentContainer>
    )
}
 
export default SectionTwo;