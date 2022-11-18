import styled from 'styled-components'


export const ContentContainer = styled.div.attrs({
    className: 'section-header',
})`
width:100%;
padding: 10px;
height: fit-content;
margin: 0px auto 20px auto;
`


export const Text = styled.p`
font-family: 'Playfair Display', serif;
font-size: var(--saratoga-medium-text) !important;
color: var(--saratoga-black) !important;
margin-bottom: 20px;
min-width: 90%;
padding: 20px;
` 


export const TextSection = styled.div.attrs({
    className: "flex center flow-col",
})`
`
export const ButtonSection = styled.div.attrs({
    className: "flex vertical-center",
})`
`

export const LearnButton = styled.button`
font-family: 'Playfair Display', serif;
  display: inline-block;
  padding:0.7em 1.7em;
  margin:0 0.3em 0.3em 0;
  border-radius: 30px;
  font-weight:400;
  font-size: 25px;
  color:#FFFFFF;
  background-color:#c23b22;
  box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align:center;
  border: none;

  :hover {
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    cursor: pointer;
  }
` 

