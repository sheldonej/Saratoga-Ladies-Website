import styled from "styled-components";

export const FirstColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3333%;
    height: 80%;
    background-color: var(--secondary-bg-color);
    position: relative;

    @media (max-width: 1000px) {
        height: 40%;
        width: 50%;
    }

    @media (max-width: 800px){
        height: 30%;
        width: 100%;
    }
`

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

        @media (max-width: 1000px){
            content: '';
            border-left: 1px solid var(--footer-line-color);
            position: absolute;
            height: calc(100% - var(--footer-spacing));
            top: calc(var(--footer-spacing)/2);
        }
    }

    @media (max-width: 1000px){
        height: 40%;
        width: 50%;
    }

    @media (max-width: 800px){
        height: 30%;
        width: 100%;

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
`

export const ThirdColumn = styled.div`
    display: flex;
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

export const MissionStatementTitle = styled.div`
    width: 100%;
    height: 50%;
    margin: auto;
    text-align: center;
    font-size: larger;
    padding-top: 10px;

    @media (max-height: 1000px) {
        height: 10%;
    }

    @media (max-height: 800px) {
        font-size: small;
    }
`

export const TextBox = styled.div`
    justify-content: center;
    margin: auto;
    text-align: center;
    align-items: center;

    @media (max-height: 1000px) {
        height: 60%; 
    }
`
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
    height: 50%;
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

    @media (max-height: 1000px) {
        font-size: small;
    }
`
export const LinkStyles = styled.link`
    &:link {
        text-align: center;
        color:black;
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
    list-style-type: circle;
    display: inline-block;
`
