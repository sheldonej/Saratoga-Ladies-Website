import * as React from "react"
import "../../index.css"
import "../header.css"
import HeaderData from "../../Constants.js"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import IMG from '../../images/SaratogaLadiesLogo.png'

function HeaderContent(props){
    const [display, setDisplay] = useState( 'none' )

    function handleDropDownClick() {
        if (display == 'none'){
            setDisplay( 'flex' )
        }
        else {
            setDisplay( 'none' )
        }
    }

    return (
        <div className="header-wrapper">
            <div className="container1">
                <Link to="/rodria11">Adrian's Webpage</Link>
            </div>
            <div className="container2">
                <Link to="/hadav">Vishal's Webpage</Link>
            </div>
            <div className="imageContainer" onClick={()=>navigate('/')}>
                The Saratoga Ladies
            </div>
            <div className="container3">
                <Link to="/merrim5">Matthew's Webpage</Link>
            </div>
            <div className="dropcontainer" onClick={()=>handleDropDownClick()}>
                DROP CONTAINER
                <div className="drop-content-container" style={{display: display}}>
                    {HeaderData.map((item) => {
                        return ( <div className="dropdown-content">
                        {item.title}
                        </div> )
                    })}
                </div>
            </div>
            <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
        </div>
    )
}

export default HeaderContent