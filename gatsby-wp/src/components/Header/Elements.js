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
`

export const Item = styled.div`
    color:black;
    background-color: inherit;
    display: block;
    height: 100%;
    padding: 5%;
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

    &:hover ${DropdownContent} {
        display: block;
    }

    &:hover ${DropBtn} {
        background-color: var(--main-ribbon-color);
    }
`

export const DropBtn = styled.div`
    background-color: white;
    color: var(--saratoga-red);
    padding: 16px;
    font-size: 16px;
    border: none;
    text-align: center;
    align-items: end;
    z-index: inherit;
`
export const ImageContainer = styled.div`
    display: flex;
    max-width: 22.5%;
    min-width: 22.5%;
    height: 100%;
    text-align: center;
    justify-content: center;
    background-color: inherit;
    align-items: end;
    z-index: 100000;
    font-family: 'Great Vibes', cursive;
    margin-top: 70px;
    font-size: 40px !important;
    color: var(--saratoga-red);
    padding-right: 20px;
`