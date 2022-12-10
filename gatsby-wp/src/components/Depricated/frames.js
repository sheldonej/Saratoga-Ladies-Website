import styled from 'styled-components'

export const ImageFrame = styled.div`
    display: inline-block;
	padding: 25px;
	border-width: 20px;
	border-style: solid;
	border-color: #2F2D2D #434040 #4F4C4C #434040;
	background: #f5f5f5;
//insert map component here
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