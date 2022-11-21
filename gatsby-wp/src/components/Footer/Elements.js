import styled from "styled-components";

export const FirstColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 33.3333%;
    height: 80%;
    background-color: var(--secondary-bg-color);
    position: relative;

    @media only screen and (max-width: 1000px) {
        & {
            height: 40%;
            width: 50%;
        }
    }

    @media only screen and (max-width: 800px){
        & {
            height: 30%;
            width: 100%;
        }
    }
`;

export const SecondColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 33.3333%;
    height: 80%;
    background-color: var(--secondary-bg-color);
    position: relative;

    &:before {
        content: '';
        border-left: 1px solid var(--footer-line-color);
        position: absolute;
        height: calc(100% - var(--footer-spacing));
        top: calc(var(--footer-spacing)/2);
        left: 0;
    }

    &:after {
        content: '';
        border-left: 1px solid var(--footer-line-color);
        position: absolute;
        height: calc(100% - var(--footer-spacing));
        top: calc(var(--footer-spacing)/2);
        right: 0;
    }

    @media only screen and (max-width: 1000px){
        height: 40%;
        width: 50%;

        &:before{
            content: '';
            border-left: 1px solid var(--footer-line-color);
            position: absolute;
            height: calc(100% - var(--footer-spacing));
            top: calc(var(--footer-spacing)/2);
        }

        &:after{
            border-left: none;
            right: 0;
        }
        
    }

    @media only screen and (max-width: 800px){
        & {
            height: 30%;
            width: 100%;
        }
    
        &:before {
            border-left: none;
        }

        &:after {
            border-left: none;
            content: '';
            border-top: 1px solid var(--footer-line-color);
            position: absolute;
            width: calc(100% - var(--footer-spacing));
            left: calc(var(--footer-spacing)/2) ;
            top: 0;
        }
    }
`;

export const ThirdColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 33.3333%;
    height: 80%;
    background-color: var(--secondary-bg-color);
    position: relative;

    @media (max-width: 1000px) {
        height: 40%;
        width: 100%;
        position: relative;
        border-left: none;

        &:after {
            border-left: none;
            content: '';
            border-top: 1px solid var(--footer-line-color);
            position: absolute;
            width: calc(100% - var(--footer-spacing));
            left: calc(var(--footer-spacing)/2);
            top: 0;
        }
    }

    @media (max-width: 800px){
        height: 30%;
        width: 100%;
    }
`

export const Bar = styled.div`
    display: flex;
    width: 100%;
    height: 20%; 
    background-color: var(--secondary-bg-color); 
    position: relative;
    
    &:after {
        content: '';
        border-top: 1px solid var(--footer-line-color);
        position: absolute;
        width: calc(100% - var(--footer-spacing));
        left: calc(var(--footer-spacing)/2) ;
    }

    @media (max-width: 800px){
        height: 10%;
        width: 100%;
    }
`

export const MissionStatementTitle=styled.div`
    width: 100%;
    height: 20%;
    @media only screen and (max-width: 1000px) {
        & {
            text-align: center;
            height: 10%;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            height: 30%;
            text-align: center;
            font-size: small;
        }
    }
    text-align: center;
    font-size: larger;
`;

export const DonationTitle=styled.div`
    width: 100%;
    height: 20%;
    @media only screen and (max-width: 1000px) {
        & {
            text-align: center;
            height: 10%;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            height: 30%;
            text-align: center;
            font-size: small;
        }
    }
    text-align: left;
    font-size: larger;
`;

export const LinkTitle=styled.div`
    width: 100%;
    height: 20%;
    @media only screen and (max-width: 1000px) {
        & {
            text-align: center;
            height: 10%;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            height: 30%;
            text-align: center;
            font-size: small;
        }
    }
    text-align: right;
    font-size: larger;
`;

export const TextBox = styled.div`
    justify-content: center;
    margin: auto;
    text-align: center;
    align-items: center;
`

export const BarTextBox = styled.div`
    justify-content: center;
    margin: auto;
    text-align: center;
    align-items: center;
`;

export const MenuFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: x-small; 

    &:visited {
        text-decoration: none;
        color:white;
     }
`

export const Button = styled.button`
    background-color: var(--saratoga-red);
    height: 70%;
    width: 50%;
    text-align: center;
    font-size: 16px;
    border-radius: 12px;
    border-color: var(--saratoga-red);
    transition-duration: 0.4s;
    color: white;

    &:hover {
        background-color: white; 
        color: var(--saratoga-red);
    }

    @media only screen and (max-width: 1000px) {
        & {
            font-size: small;
            width: 60%;
            height: 40%;
        }
    }

    @media only screen and (max-width: 800px){
        & {
            height: 50%;
            width: 70%;
        }
    }
`;

export const LinkStyles = styled.link`
    &:link {
        text-align: center;
        color: black;
        text-decoration: none;
    }
    &:visited{
        color: black;
        text-decoration: none;
    }
    
    &:hover{
        text-decoration: underline;
    }
`

export const ListFormat = styled.ul`
    list-style-type: none;
    margin-bottom: 12px;
`
