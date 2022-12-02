import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-bg-color);

    & svg {
        position: fixed;
        top: calc(var(--normal-header-height));
        z-index: 99999;
        filter: drop-shadow(0px 4px 2px rgb(0 0 0 / 0.15));
        width: 100%;
    }

    & svg path {
        fill: var(--primary-bg-color);
        z-index: 99999;
    }
`



export const Item = styled.div`
    color:black;
    background-color: inherit;
    display: block;
    height: 100%;
    padding: 5%;
    cursor: pointer;
`

export const DropBtn = styled.div`
    background-color: rgba(0,0,0,0);
    color: var(--saratoga-red);
    padding: 5px 0px;
    font-size: 16px;
    border: none;
    text-align: center;
    align-items: end;
    z-index: inherit;
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 100000;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    text-align: center;
    cursor: pointer;

    & ${Item}:hover {
        background-color: #ddd;
    }
`

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    min-width: 20%;
    max-width: 20%;
    z-index: 100000;
    cursor: pointer;

    &:hover ${DropdownContent} {
        display: block;
    }

    &:hover ${DropBtn} {
        background-color: white;
    }

`
export const ImageContainer = styled.div`
    display: flex;
    max-width: 22.5%;
    min-width: 22.5%;
    height: 100%;
    text-align: center;
    justify-content: center;
    background-color: rgba(0,0,0,0);
    align-items: end;
    z-index: 100000;
    font-family: 'Great Vibes', cursive;
    margin-top: 5.5vw;
    font-size: 2.5vw !important;
    color: var(--saratoga-red);
    padding-right: 10px;
    cursor: pointer;

    /* @media screen and (min-width: 1400px) {
        & {
            font-size: 35px !important;
            margin-top: 50px;
        }
    }
    
    /* IPad Air as reference */
    @media screen and (max-width: 900px) {
        & {
            font-size: 22px !important;
            margin-top: 33px;
        }
    } */
`