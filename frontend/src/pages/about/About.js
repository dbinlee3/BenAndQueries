import React from 'react'
import './about.css'

import profilePic from '../../assets/profilephoto.jpeg'

function About() {
    return (
        <div className="aboutContainer">

            <div className="profileBox">
                <div className="boxTextTop">
                    <h2>nice to meet you.</h2>
                    <h2>my name's Ben.</h2>
                </div>
                
                <img className="profilePic" src={profilePic} alt="" />

                <div className="boxTextBottom">
                    <h2>here's some info</h2>
                    <h2>about me.</h2>
                </div>
            </div>



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
    )
}

export default About
