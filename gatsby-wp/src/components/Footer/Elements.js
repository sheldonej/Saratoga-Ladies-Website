import styled from "styled-components";
import {Link} from "gatsby"


export const FirstColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
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
`;

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
`;

export const Title=styled.h1`
    color: white; 
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
    text-decoration: underline; 
    text-align: center; 
    font-size: larger; 
    @media only screen and (max-width: 1000px) {
        & {
            font-size: small;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            font-size: small;
        }
    }
`;

export const TextBox = styled.p`
    height: 70%;
    width: 100%; 
    font-size: .7em;
    margin: auto;
    text-align: center;
    color: black; 

    @media only screen and (max-width: 1000px) {
        &{
            font-size: .5em;
        }
    }
    @media only screen and (max-width: 800px) {
        &{
            font-size: .6em;
        }
    }
`;
export const SecondTextBox = styled.p`
    height: 40%;
    width: 100%; 
    font-size: .6em;
    margin: auto;
    text-align: center;
    color: black; 

    @media only screen and (max-width: 1000px) {
        &{
            height: 70%;
            width: 75%;
            font-size: .5em;
            margin: 0; 
        }
    }
    @media only screen and (max-width: 800px) {
        &{
            margin: auto;
            font-size: .6em;
        }
    }
`;

export const MediaBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row; 
    justify-content: center;
    font-size: 1.5em;
    color: black;

    @media only screen and (max-width: 1000px) {
        &{
            font-size: .9em;
        }
    }

    @media only screen and (max-width: 800px) {
        &{
            font-size: 1.1em;
        }
    }

`;
export const Logo = styled.i`
    color: black;
    &:hover {
        background-color: white; 
        color: black;
    }
`;
export const BarTextBox = styled.div`
    justify-content: center;
    margin: auto;
    font-size: small; 
`;

export const Button = styled.button`
    background-color: transparent;
    height: 20%;
    width: 100%;
    text-align: center;
    font-size: 16px;
    border-color: white;
    transition-duration: 0.4s;
    color: black;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        background-color: white; 
        color: black;
    }

    @media only screen and (max-width: 1000px) {
        & {
            font-size: small;
            width: 20%;
        }
    }

    @media only screen and (max-width: 800px){
        & {
            height: 50%;
        }
    }
`;

export const LinkStyles = styled(Link)`
    display: flex;
    color: black;
    text-decoration: none;
    flex-direction: column;
    flex-wrap: wrap;
    filter: drop-shadow(0 0 .75rem white);


    &:visited{
        color: black;
        list-style-type: circle;
        text-decoration: none;
    }
    
    &:hover{
        text-decoration: underline;
    }

    @media only screen and (max-width: 1000px){
        display: inline-block;
    }
    @media only screen and (max-width: 800px){
        display: inline-block;
        padding: 5px;
        font-size: small;
        text-content: center;
        justify-content: center;
        align-items: center;
    }
`

export const ListFormat = styled.ul`
    height: 60%;
    width: 100%;
    font-size: smaller;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: circle; 
    @media only screen and (max-width: 1000px){
        height: 30%;
    }
`;