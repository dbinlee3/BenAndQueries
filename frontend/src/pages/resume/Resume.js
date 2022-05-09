import React, { useState } from 'react'
import './resume.css'

import java from '../../assets/resume_assets/javalogo1.png'

function Resume() {


    return (
        <>
            <div className="resumeContainer">
                <div className="resumeFlow">
                    <h2 className="sectionLogo A">Skills</h2>


                    <section className="resumeSection skills">
                        <h3 className="skillsHeader">Programming</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription pc">Java</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription">Javascript</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription" >C</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription" >C++</p>
                            </li>
                        </ul>

                    </section>

                    <section className="resumeSection skills">
                        <h3 className="skillsHeader">Web Development</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription" >HTML</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription">CSS</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription" >React.js</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription" >Tailwind CSS</p>
                            </li>
                        </ul>
                    </section>

                    <section className="resumeSection skills">
                        <h3 className="skillsHeader">Tech</h3>
                        <div className="vertLine"/>
                        <ul className="techList">

                            <li className="techItem">
                                <p className="techDescription">Git</p>
                            </li>
                            <li className="techItem">
                                <p className="techDescription">Unix</p>
                            </li>
                            <li className="techItem">
                                <p className="techDescription">Visual Studio</p>
                            </li>
                            <li className="techItem">
                                <p className="techDescription">IntelliJ</p>
                            </li>
                            <li className="techItem">
                                <p className="techDescription">Eclipse</p>
                            </li>
                            <li className="techItem">
                                <p className="techDescription">MS Office</p>
                            </li>
                        </ul>
                    </section>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <h2 className="sectionLogo B">Education</h2>
                    <section className="educationSection">
                        <div className="educationBlock">
                            <div className="blockContent">
                                <h3 className="educationHeader">
                                    Cognitive Science<br/>
                                    Design {"&"} Interaction
                                </h3>
                                <p className="educationDescription">Bachelor's of Science</p>

                                <h4 className="educationSchool major">
                                    University of California<br />
                                    San Diego
                                </h4>

                                <p className="educationDescription">Expected June 2023</p>
                            </div>
                        </div>

                        <div className="educationBlock">
                            <div className="blockContent">
                                <h3 className="educationHeader">
                                    Computer Science
                                </h3>
                                <p className="educationDescription">Minor</p>

                                <h4 className="educationSchool minor">
                                    University of California<br />
                                    San Diego
                                </h4>

                                <p className="educationDescription">Expected June 2023</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Resume
