import React from 'react'
import './navbar.css'

import linkedlogo from '../../assets/linkedinlogo.png'
import githublogo from '../../assets/githublogo.png'

function Navbar() {
    return (
        <div className="navWrapper">
            <div className="navLeft">
                ben {"&"} queries.
            </div>

            <div className="navCenter">
                <span>ABOUT ME</span>
                <span>PROJECTS</span>
                <span>RESUME</span>
            </div>
            
            <div className="navRight">
                <img className="githubLogo" src={githublogo} alt="" />
                <img className="linkedLogo" src={linkedlogo} alt="" />

            </div>

        </div>
    )
}

export default Navbar
