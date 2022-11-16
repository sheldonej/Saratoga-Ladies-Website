//<DoubleCircle circle1-size={"s"} circle2-size={"m"} circle1-image={"/"} circle2-image={"s"}/>

import * as React from "react"
import { ContentContainer, SectionOneThirdContainer, SectionTwoThirdContainer,
    SectionWrapper, SectionPreHeaderText  } from './SectionElements' 
import DoubleCircle from "../../DoubleCircle/index.jsx"

const SectionThree = () => {
    return (
        <ContentContainer>
            <SectionTwoThirdContainer>
                <SectionWrapper>
                    <SectionPreHeaderText>
                        Lorem ipsum dolor sit amet
                    </SectionPreHeaderText>
                    <h2> Excepteur Sint Occaecat Cupidatat </h2> 
                    <p> Enim neque volutpat ac tincidunt vitae semper. Nulla aliquet enim tortor at auctor urna. Porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquam etiam erat velit scelerisque in dictum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Nec ultrices dui sapien eget mi proin sed libero enim. Turpis egestas maecenas pharetra convallis posuere morbi leo. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. </p>
                </SectionWrapper>   
            </SectionTwoThirdContainer>
            <SectionOneThirdContainer>
                <DoubleCircle circle1-size={"s"} circle2-size={"m"} circle1-image={"/"} circle2-image={"s"}/>
            </SectionOneThirdContainer>
        </ContentContainer>
    )
}
// convert css to element (using type componeots)
// Note: section 3 code is here (double circle)
// use this as a reference to make style copoonnet 
// convert double circle to elements.cs, move smaller circle to right and update cirle
 
export default SectionThree;