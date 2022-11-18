import * as React from "react"
import "../../index.css"
import { HeaderData } from "../../Constants.js"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import {MarginTop35, DropBtn, Dropdown, DropdownContent, HeaderWrapper, ImageContainer, Item } from './Elements'

//create onHover function for drop 

function HeaderContent(props){
    return (
        <HeaderWrapper>
            <Dropdown>
                <DropBtn>Dropdown</DropBtn>
                <DropdownContent>
                    {HeaderData[0].map((item) => {
                        return ( <Item>
                            {item.title}
                        </Item> )
                        })}
                </DropdownContent>
            </Dropdown>
            <Dropdown style={{marginTop: "35px"}}>
                <DropBtn>Dropdown</DropBtn>
                <DropdownContent>
                    {HeaderData[1].map((item) => {
                        return ( <Item>
                            {item.title}
                        </Item> )
                        })}
                </DropdownContent>
            </Dropdown>
            <ImageContainer onClick={()=>navigate('/home')}>
                The Saratoga Ladies
            </ImageContainer>
            <Dropdown style={{marginTop: "35px"}}>
                <DropBtn>Dropdown</DropBtn>
                <DropdownContent>
                    {HeaderData[2].map((item) => {
                        return ( <Item>
                            {item.title}
                        </Item> )
                        })}
                </DropdownContent>
            </Dropdown>
            <Dropdown>
                <DropBtn>Dropdown</DropBtn>
                <DropdownContent>
                    {HeaderData[3].map((item) => {
                        return ( <Item>
                            {item.title}
                        </Item> )
                        })}
                </DropdownContent>
            </Dropdown>
            <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
        </HeaderWrapper>
    )
}

export default HeaderContent