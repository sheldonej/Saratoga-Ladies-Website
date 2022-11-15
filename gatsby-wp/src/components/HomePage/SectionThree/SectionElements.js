import styled from 'styled-components'

export const ContentContainer = styled.div`
    height: auto;
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


export const SectionWrapper = styled.div`
    display: flex;
    flex-flow: column;
    font-family: 'Ubuntu', sans-serif;
    justify-content: center;
    padding: 0px 15px;

    h2 {
        color: var(--saratoga-blue);
        font-size: var(--saratoga-larger-text);
        margin: 5px 0px;
        padding: 0px;
    }

    p {
        font-size: var(--saratoga-small-text);
        color: var(--saratoga-black);
        margin: 0px;
        padding: 10px 0px 0px 0px;
        max-width: 100%;
    }

`   

export const SectionPreHeaderText = styled.div`
    font-size: var(--saratoga-medium-text);
    font-weight: bold;
    color: var(--saratoga-red);
`