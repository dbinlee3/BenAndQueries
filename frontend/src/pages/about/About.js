import React, { useState } from 'react'
import './about.css'

import profilePic from '../../assets/profile.jpeg'

function About() {

    const [aboutItemA, setAboutItemA] = useState(false);
    const [aboutItemB, setAboutItemB] = useState(false);
    const [aboutItemC, setAboutItemC] = useState(false);
    const [aboutItemD, setAboutItemD] = useState(false);

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


                        <div className="listBox2">
                            <ul className="listContent">
                                <li className="listParagraph"
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
                                        {marginLeft: '5px', transition: 'all 0.2s ease-out'}}
                                    />

                                    <p 
                                        className="aboutDescription"
                                        style={ aboutItemA ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}
                                        }
                                    >
                                        ..for visiting my website! This site contains some of my ideas and creations that I'm more than pleased to share.</p>

                                </li>

                                <li className="listParagraph"
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
                                        {marginLeft: '5px', transition: 'all 0.2s ease-out'}}
                                    />

                                    <p 
                                        className="aboutDescription"
                                        style={ aboutItemB ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}
                                        }
                                    >Here's some info about me. I am a software developer who specializes in Front-end web and app development. I've been coding for 4 years, and have recently started to learn web and app development using industry standards such as the MERN stack.</p>
                                    
                                </li>

                                <li className="listParagraph"
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
                                        {marginLeft: '5px', transition: 'all 0.2s ease-out'}}
                                    />

                                    <p 
                                        className="aboutDescription"
                                        style={ aboutItemC ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}
                                        }
                                    >Currently, I'm a full time student at UC San Diego majoring in Cognitive Science with a specialization in Design {"&"} Interaction. I am also pursuing a Minor in Computer Science. In my spare time I enjoy learning new things related to coding, whether if it's building various sorts of web apps or picking up a new language.</p>
                                    
                                </li>

                                <li className="listParagraph"
                                    onMouseEnter={e => {
                                        setAboutItemD(true)
                                    }}
                                    onMouseLeave={e => {
                                        setAboutItemD(false)
                                    }}
                                >

                                    <i class="fas fa-angle-double-right fa-xl"
                                        style={ aboutItemD ? { 
                                        marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                        {marginLeft: '5px', transition: 'all 0.2s ease-out'}}
                                    />

                                    <p 
                                        className="aboutDescription"
                                        style={ aboutItemD ? { 
                                            top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                            {top: '5px', transition: 'all 0.2s ease-out'}
                                        }
                                    >Thanks again for stopping by. If you're interested in my work, or would like to get in touch, feel free to navigate through the website!</p>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
