import styled from "styled-components";
import {Link} from "gatsby"


export const FooterWrapper = styled.footer` 
    display: flex;
    width: 100%;
    height: auto;

    flex-flow: column;
`


export const FooterTop = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    flex: 1 0;

    background: transparent;

    box-shadow: rgb(0 0 0) 0px 0px 10px;
    position: relative;
    z-index: 9999;
`

export const FooterBottom = styled.div`
    display: flex;
    height: 40px;

    background: lightgrey;
    position: relative;
    z-index: 9;
    padding: 0px 20px;

    justify-content: space-between;
    align-items: center;
    color: #fff;
`


export const FooterSection = styled.div`
    display: flex;
    width:  fit-content;

    height: fit-content;
    max-height: 200px;

    flex-flow: column;
    justify-content: space-between;

    padding: 30px 40px;
    //margin-inline: 20px;
    box-sizing: border-box;
    position: relative;

    p {
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 20px 0px;

        color: #000;
    }

    button {
        margin: 0px 0px 10px 0px;
        height: 40px;
    } 
`



export const FooterSectionTitle = styled.h4`
    color: #000;
    line-height: 1.0;
    font-size: 18px;

    width: fit-content;
    margin: 0px 0px 25px 0px;
    padding: 0px 0px 0px 0px;

    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 2px;
        bottom: -5px;
        height: 2px;
        width: 90px;

        background: lightgrey;
    
    }
`

/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/

export const FirstColumn = styled.div.attrs({ 
    className: 'footer-section',
    })`

    p {
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 20px 0px;

        color: #000;
        font-size: var(--saratoga-small-text);
    }

    @media only screen and (max-width: 1000px) {
        & { 
            width: 50% !important;
            max-width: 50% !important;  
        }
    }

    @media only screen and (max-width: 800px){
        & { 
            width: 100% !important;
            max-width: 100% !important; 
        }
    }
`;

export const SecondColumn =  styled.div.attrs({ 
    className: 'footer-section',
    })`
     
    p {
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 20px 0px;

        color: #000;
        font-size: var(--saratoga-small-text);
    }

    button {
        color: #fff !important;
        margin: 0px 0px 10px 0px;
        height: 40px;
        //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:  5px;
        cursor: pointer;

        //background-color: transparent; 
        text-align: center;
        font-size: var(--saratoga-small-text);
        //border-color: white;
        transition-duration: 0.4s;
        color: black;
        margin-left: 10px;
        margin-right: 10px;
        border: none;

        background-color: #c23b22;
        box-shadow: inset 0 -0.6em 1em -0.35em rgb(0 0 0 / 17%), inset 0 0.6em 2em -0.3em rgb(255 255 255 / 15%), inset 0 0 0em 0.05em rgb(255 255 255 / 12%), rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    button:hover {
        //background-color: lightblue; 
        color: #fff;
    
    }


    &:before {
        content: '';
        border-left: 2.5px solid var(--footer-line-color);
        position: absolute;
        height: calc(100% - var(--footer-spacing));
        top: calc(var(--footer-spacing)/2);
        left: 0;
    }

    &:after {
        content: '';
        border-left: 2.5px solid var(--footer-line-color);
        position: absolute;
        height: calc(100% - var(--footer-spacing));
        top: calc(var(--footer-spacing)/2);
        right: 0;
    }

    @media only screen and (max-width: 1000px) {
        & { 
            width: 50% !important;
            max-width: 50% !important;  
        }

        &:before{
            content: '';
            border-left: 2.5px solid var(--footer-line-color);
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
            width: 100% !important;
            max-width: 100% !important; 
        }

        &:before {
            border-left: none;
        }

        &:after {
            border-left: none;
            content: '';
            border-top: 2.5px solid var(--footer-line-color);
            position: absolute;
            width: calc(100% - var(--footer-spacing));
            left: calc(var(--footer-spacing)/2) ;
            top: 0;
        }
    }
`;

export const ThirdColumn =  styled.div.attrs({ 
    className: 'footer-section',
    })`

    p {
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 20px 0px;

        color: #000;
        font-size: var(--saratoga-small-text);
    }


    @media (max-width: 1000px) {
        & {  width: 100% !important; }

        &:after {
            border-left: none;
            content: '';
            border-top: 2.5px solid var(--footer-line-color);
            position: absolute;
            width: calc(100% - var(--footer-spacing));
            left: calc(var(--footer-spacing)/2);
            top: 0;
        }
    }

    @media (max-width: 800px){
        height: auto;
        width: 100%;
    }
`;
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/



export const FooterSectionIconWrapper = styled.div`
    display: flex;
    flex-flow: row;

    justify-content: flex-start;
    gap: 10px;
    height: auto;
    margin: 0px 0px 10px 0px;
`

export const FooterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    
    height: 40px;
    width: 40px;

    background: #fff;
    //box-shadow: rgb(0 0 0) 0px 0px 3px;
    border-radius: 5px;

    background-color: #c23b22;
    box-shadow: inset 0 -0.6em 1em -0.35em rgb(0 0 0 / 17%), inset 0 0.6em 2em -0.3em rgb(255 255 255 / 15%), inset 0 0 0em 0.05em rgb(255 255 255 / 12%), rgba(0, 0, 0, 0.24) 0px 3px 8px;
`




export const FooterBottomContent = styled.div`
    display: flex;
    width: auto;
    flex-flow: row;

    height: 100%;
    align-items: center;

    color: #000;

`


export const FooterSectionList = styled.div`
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    flex: 1 0;
    max-height: 200px;

    background: transparent;
    gap: 10px;


    li {
        color: #000;
        width: 50%;
        height: auto;
        font-size: var(--saratoga-small-text);
    }

    a {
        cursor: pointer;
        color: #000;
       
        
    }

    a:hover {
        color: blue;
        opacity: 1;

    }


`

