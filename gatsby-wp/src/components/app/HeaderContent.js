import * as React from "react"
import "../../index.css"
import "../header.css"
import { HeaderData } from "../../Constants.js"
import { Link, navigate } from "gatsby"
import { useState } from 'react'
import IMG from '../../images/SaratogaLadiesLogo.png'

//create onHover function for drop 

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
             <div className="dropdown">
                <div className="dropbtn">Dropdown</div>
                <div className="dropdown-content">
                    {HeaderData[0].map((item) => {
                        return ( <div className="item">
                            {item.title}
                        </div> )
                        })}
                </div>
            </div>
            <div className="dropdown margin-top-35">
                <div className="dropbtn">Dropdown</div>
                <div className="dropdown-content">
                    {HeaderData[1].map((item) => {
                        return ( <div className="item">
                            {item.title}
                        </div> )
                        })}
                </div>
            </div>
            <div className="imageContainer" onClick={()=>navigate('/')}>
                The Saratoga Ladies
            </div>
            <div className="dropdown margin-top-35">
                <div className="dropbtn">Dropdown</div>
                <div className="dropdown-content">
                    {HeaderData[2].map((item) => {
                        return ( <div className="item">
                            {item.title}
                        </div> )
                    })}
                </div>
            </div>
            <div className="dropdown">
                <div className="dropbtn">Dropdown</div>
                <div className="dropdown-content">
                    {HeaderData[3].map((item) => {
                        return ( <div className="item">
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