import * as React from "react"
import { TitleWrapper, TitleText, TitleLines } from './HeaderElements' 

const LinedHeader = (props) => {
    return (
        <TitleWrapper>
            <TitleLines>
                <TitleText>
                    { props.children }
                </TitleText>
            </TitleLines>
        </TitleWrapper>
    )

}

export default LinedHeader