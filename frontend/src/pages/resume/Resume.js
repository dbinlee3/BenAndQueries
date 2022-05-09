import React, { useState } from 'react'
import './resume.css'

import java from '../../assets/resume_assets/javalogo1.png'

function Resume() {

    //useState for text description
    const [sectionA, setSectionA] = useState(false);
    const [sectionB, setSectionB] = useState(false);

    return (
        <>
            <div className="resumeContainer">
                <div className="resumeFlow">
                    <h2 className="sectionLogo">Skills</h2>


                    <section className="resumeSection"
                        onMouseEnter={e => {
                            setSectionA(true)
                        }}
                        onMouseLeave={e => {
                            setSectionA(false)
                        }}
                    >
                        <h3 className="skillsHeader">Programming</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription pc"
                                    style={ sectionA ? { display: 'block' } : { display: 'none' }}
                                >Java</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription"
                                        style={ sectionA ? { display: 'block' } : { display: 'none'}}
                                    >Javascript</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription"
                                        style={ sectionA ? { display: 'block' } : { display: 'none'}}
                                    >C</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                    <p className="logoDescription"
                                        style={ sectionA ? { display: 'block' } : { display: 'none'}}
                                    >C++</p>
                            </li>
                        </ul>

                    </section>

                    <section className="resumeSection"
                        onMouseEnter={e => {
                            setSectionB(true)
                        }}
                        onMouseLeave={e => {
                            setSectionB(false)
                        }}
                    >
                        <h3 className="skillsHeader">Web Development</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription"
                                    style={ sectionB ? { display: 'block' } : { display: 'none' }}
                                >HTML</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription"
                                    style={ sectionB ? { display: 'block' } : { display: 'none' }}
                                >CSS</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription"
                                    style={ sectionB ? { display: 'block' } : { display: 'none' }}
                                >React.js</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javalogo" src={java} alt=""/>
                                <p className="logoDescription"
                                    style={ sectionB ? { display: 'block' } : { display: 'none' }}
                                >Tailwind CSS</p>
                            </li>
                        </ul>
                    </section>

                    <section className="resumeSection">
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

                </div>
            </div>
        </>
    )
}

export default Resume
