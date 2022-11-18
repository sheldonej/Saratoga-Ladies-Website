import styled from 'styled-components'

export const TitleWrapper = styled.div.attrs({ 
    className: 'flex vertical-center',
    })`
    height: auto;    
`

export const TitleLines = styled.div`
    font-family: 'Readex Pro', sans-serif !important; //'Playfair Display', serif;
    //font-style: italic;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;    overflow: hidden;
    color: #c23b22;

    &:after, 
    &:before {
      content: '';
      width: 200px;
      height: 5px;
      background: var(--main-ribbon-color);
      margin: 0 30px;
      border-radius: 7px;
      display:inline-block;
      vertical-align:middle;
      
    }
    
` 

export const TitleText = styled.h2`
    font-size: var(--saratoga-larger-text);
    width: max-content;
`
    