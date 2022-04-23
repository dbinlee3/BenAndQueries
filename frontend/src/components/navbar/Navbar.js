import React, { Component } from 'react'
import { MenuItems } from './MenuItems.js'
import './navbar.css'

import { Button } from '../button/Button.js'
import githubLogo from '../../assets/githublogo.png'
import linkedinLogo from '../../assets/linkedinlogo.png'

class Navbar extends Component {

    state = { clicked: false }

    //Sets state to true/false, for icon click change
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <>
                <nav className="navbarItems">
                    <a className="navbarLogo" href="/">ben {"&"} queries.</a>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map( (item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}

                        
                    </ul>
                    <Button>GitHub</Button>
                    <Button>LinkedIn</Button>
                    
                    
                    {/* <img className="gitLogo" src={githubLogo} alt="" />
                    <img className="linkedLogo" src={linkedinLogo} alt="" /> */}



                </nav>
            </>
        )
    }
}

export default Navbar