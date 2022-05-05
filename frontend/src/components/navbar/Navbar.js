import React, { Component } from 'react'
import { MenuItems } from './MenuItems.js'
import './navbar.css'

import { Button } from '../button/Button.js'
import { Link } from 'react-router-dom';

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
                    <a className="navbarLogo" href=".">ben {"&"} queries.</a>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map( (item, index) => {

                            /*If current Mobile Menu item is GitHub or LinkedIn,
                            open in new tab */
                            if (item === MenuItems[3] || item === MenuItems[4]){
                                return (
                                    <li key={index}>
                                        <a 
                                        className={item.cName} 
                                        href={item.url}
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            }
                            
                            /* Else, normal hyperlink */
                            else {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            }
                        })}

                        
                    </ul>

                    {/* Open external websites in new tab, landscape mode */}
                    <span className="navButtons">
                        <a 
                        href="https://github.com/dbinlee3"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Button className="navButtons">GitHub</Button>
                        </a>
                    </span>

                    <span className="navButtons">
                        <a 
                        href="https://www.linkedin.com/in/dong-bin-lee-065666235/"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Button className="navButtons">LinkedIn</Button>
                        </a>
                    </span>
                    
                </nav>
            </>
        )
    }
}

export default Navbar