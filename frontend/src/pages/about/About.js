import React, { useState } from 'react'
import './about.css'

import profilePic from '../../assets/profile.jpeg'

function About() {

    const [aboutItemA, setAboutItemA] = useState(false);
    const [aboutItemB, setAboutItemB] = useState(false);
    const [aboutItemC, setAboutItemC] = useState(false);

    return (
        <div className="aboutContainer">

            <div className="aboutFlow">


                <h1 className="aboutTitle">About Me</h1>
                <div className="aboutGrid">

                    <div className="profileBox">

                        <div className="profilePicture">
                            <img className="profilePictureImg" src={profilePic} />
                        </div>

                        <div className="profileContent">
                            <h3 className="name">Ben Lee</h3>
                            <h4 className="title">Web Developer</h4>
                        </div>

                        <ul className="socials">
                            <li>
                                <a 
                                    href="mailto:dbinlee.3@gmail.com" 
                                    className="fa fa-google" 
                                    aria-hidden="true"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                />
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/dbinlee3" 
                                    className="fa fa-github" 
                                    aria-hidden="true"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                />
                            </li>
                            <li>
                                <a 
                                    href="https://www.linkedin.com/in/dong-bin-lee-065666235/" 
                                    className="fa fa-linkedin" 
                                    aria-hidden="true"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                />
                            </li>    

                        </ul>
                    </div>


                    <div className="aboutContent">

                        <h2 className="thankyou">Thank you,</h2>
                        
                        <div className="listBox">
                            <div className="listContent">
                                <ul className="aboutList">
                                    <li className="murphyListItem"
                                        onMouseEnter={e => {
                                            setAboutItemA(true)
                                        }}
                                        onMouseLeave={e => {
                                            setAboutItemA(false)
                                        }}
                                    >
                                        <i class="fas fa-angle-double-right fa-xl"
                                            style={ aboutItemA ? { 
                                            marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                            {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                        <p className="murphyDescription"
                                        style={ aboutItemA ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}}
                                        >Tested components, assemblies and systems for well-known clients like Apple, Microsoft and Stanford</p>
                                    </li>

                                    <li className="murphyListItem"
                                        onMouseEnter={e => {
                                            setAboutItemB(true)
                                        }}
                                        onMouseLeave={e => {
                                            setAboutItemB(false)
                                        }}
                                    >
                                        <i class="fas fa-angle-double-right fa-xl"
                                            style={ aboutItemB ? { 
                                            marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                            {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                        <p className="murphyDescription"
                                        style={ aboutItemB ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}}
                                        >Tested components, assemblies and systems for well-known clients like Apple, Microsoft and Stanford</p>
                                    </li>

                                    <li className="murphyListItem"
                                        onMouseEnter={e => {
                                            setAboutItemC(true)
                                        }}
                                        onMouseLeave={e => {
                                            setAboutItemC(false)
                                        }}
                                    >
                                        <i class="fas fa-angle-double-right fa-xl"
                                            style={ aboutItemC ? { 
                                            marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                            {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                        <p className="murphyDescription"
                                        style={ aboutItemC ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}}
                                        >Tested components, assemblies and systems for well-known clients like Apple, Microsoft and Stanford</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>





        </div>
    )
}

export default About
