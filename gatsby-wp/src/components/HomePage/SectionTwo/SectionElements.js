import styled from 'styled-components'

export const ContentContainer = styled.div`
    height: 800px;
    width: -webkit-fill-available;
    padding: 4em 4em;
    gap: 50px;

    display: flex;
    flex-flow: ${props => props.reverse ? 'row-reverse' : 'row' };

`


export const SectionOneThirdContainer = styled.div.attrs({ 
    className: 'saratoga-one-third-container saratoga-center',
    })`

    
`   

export const SectionTwoThirdContainer = styled.div.attrs({ 
    className: 'saratoga-two-third-container saratoga-center',
    })`

`   


export const SectionHalfContainer = styled.div.attrs({ 
    className: 'saratoga-half-container saratoga-center',
    })`

`   



export const SectionWrapper = styled.div`
    display: flex;
    flex-flow: column;
    //font-family: 'Ubuntu', sans-serif;
    justify-content: flex-start; 
    padding: 0px 15px;
    height: 100%;
    width: -webkit-fill-available;

    h2 {
        color: var(--saratoga-blue);
        font-size: 40px;
        margin: 5px 0px;
        padding: 0px;
        text-align: center;
        

    }

    p {
        font-size: var(--saratoga-small-text);
        color: var(--saratoga-black);
        margin: 0px;
        padding: 10px 0px 0px 0px;
        max-width: 100%;
        text-align: center;
    }

`   

export const SectionHeaderText = styled.h2`
    position: relative;

    &:before {
            //content: '';
            position: absolute;
            left: 2px;
            bottom: 0px;
            height: 3px;
            width: 90px;
            background: lightgrey;
        }
        
`


export const ImageFrame = styled.div`
    display: inline-block;
	padding: 25px;
	border-width: 20px;
	border-style: solid;
	border-color: #2F2D2D #434040 #4F4C4C #434040;
	background: #f5f5f5;
	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#E5E4DF), to(#CDCDC6));
	background-image: -webkit-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: -moz-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: -o-linear-gradient(#E5E4DF, #CDCDC6);
	background-image: linear-gradient(#E5E4DF, #CDCDC6);
	box-shadow: inset 0 2px 5px rgba(0,0,0,.6),0 5px 2px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.8);
	position: relative;
	overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: -175px;
        right: -20%;
        width: 400px;
        height: 400px;
        transform: rotateZ(-40deg);
        -webkit-transform: rotateZ(-40deg);
        -moz-transform: rotateZ(-40deg);
        -o-transform: rotateZ(-40deg);
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(255,255,255,.4)), to(rgba(255,255,255,0)));
        background-image: -webkit-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
        background-image: -moz-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
        background-image: -o-linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
        background-image: linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
    }

    img {
        border-width: 2px;
        border-style: solid;
        border-color: #BBBAB4 #C7C7BF #E5E4DF #C7C7BF;
        box-shadow:  0 -1px 1px rgba(0,0,0,.1), 0 1px 1px 1px rgba(255,255,255,.7);
        margin: 0 !important;

        width: 100%;
        height: 100%;

    }
`