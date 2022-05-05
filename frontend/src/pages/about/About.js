import React from 'react'
import './about.css'

import profilePic from '../../assets/profile.jpeg'

function About() {
    return (
        <div className="aboutContainer">

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
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="bioBox">
                <p>
                    First of all, thank you for visiting my website! 
                    This site contains some of my ideas and creations that I am more than pleased to share.
                </p>

                <p>
                    Here's some info about me. I am a software developer who specializes in Front-end web development.
                    I've been coding for 4 years, and have recently started to learn web development using industry standards such as the MERN stack.
                </p>

                <p>
                    Currently, I am a full time student at UC San Diego, majoring in Cognitive Science with a specialization in Design {"&"} Interaction. I am also pursuing a Minor in Computer Science, 
                    and in my spare time I enjoy learning new things related to coding, whether if it's building various sorts of web apps or picking up a new language.
                </p>
            </div>



        </div>
    )
}

export default About
