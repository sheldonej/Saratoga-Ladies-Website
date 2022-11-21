import * as React from "react"
import "../../index.css"
import { HeaderData } from "../../Constants.js"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import {MarginTop35, DropBtn, Dropdown, DropdownContent, HeaderWrapper, ImageContainer, Item } from './Elements'

//create onHover function for drop 

function MappedDropDown(props){
    return (<Dropdown style={{marginTop: props.mrgnTop}}>
                <DropBtn>{props.hero}</DropBtn>
                <DropdownContent>
                    {HeaderData[props.index].map((item) => {
                        return ( <Item onClick={()=>navigate(item.path)}>
                            {item.title}
                        </Item> )
                        })}
                </DropdownContent>
            </Dropdown>
    )
}

function HeaderContent(props){
    return (
        <HeaderWrapper>
            <MappedDropDown mrgnTop="0px" hero="Join Now!" index="0"/>

            <MappedDropDown mrgnTop="35px" hero="Community" index="1"/>

            <ImageContainer onClick={()=>navigate('/home')}>
                The Saratoga Ladies
            </ImageContainer>

            <MappedDropDown mrgnTop="35px" hero="Meet the Ladies" index="2"/>

            <MappedDropDown mrgnTop="0px" hero="About" index="3"/>

            <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
        </HeaderWrapper>
    )
}

export default HeaderContent