import styled from 'styled-components'

export const ContentContainer = styled.div`
    height: auto;
    width: -webkit-fill-available;
    padding: 4em 4em;
    gap: 50px;

    display: flex;
    flex-flow: ${props => props.reverse ? 'row-reverse' : 'row' };
`

export const CirclesContainer = styled.div`
    height: auto;
    width: -webkit-fill-available;
    position: relative;

    display: flex;
    flex-flow: ${props => props.reverse ? 'row-reverse' : 'row' };
`

export const InnerCircleContainer = styled.div`
    position: absolute;
    transform: translateX(-50%);
    bottom: -20px;

    display: flex;
    flex-flow: ${props => props.reverse ? 'row-reverse' : 'row' };
`