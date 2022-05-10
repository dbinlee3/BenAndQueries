import React, { useState } from 'react'
import './resume.css'

import java from '../../assets/resume_assets/javalogo2.png'
import javascript from '../../assets/resume_assets/javascript.png'
import cprogramming from '../../assets/resume_assets/cprogramming2.png'
import cplusplus from '../../assets/resume_assets/cplusplus3.png'
import html from '../../assets/resume_assets/html_logo.png'
import css from '../../assets/resume_assets/css-logo.png'
import reactLogo from '../../assets/resume_assets/react.png'
import tailwind from '../../assets/resume_assets/tailwind.png'

function Resume() {

    const cogsci = "https://cogsci.ucsd.edu/undergraduates/major/design-interaction.html";
    const compsci = "https://cse.ucsd.edu/"
    const murphyLink = "https://www.murphymckay.com/"

    const [skillsA, setSkillsA] = useState(false);
    const [skillsB, setSkillsB] = useState(false);
    const [skillsC, setSkillsC] = useState(false);

    const [educationA, setEducationA] = useState(false);
    const [educationB, setEducationB] = useState(false);

    const [workItemA, setWorkItemA] = useState(false);
    const [workItemB, setWorkItemB] = useState(false);
    const [workItemC, setWorkItemC] = useState(false);
    const [workItemD, setWorkItemD] = useState(false);


    return (
        <>
            <div className="resumeContainer">
                <div className="resumeFlow">
                    <h2 className="sectionLogo A">Skills</h2>


                    <section className="resumeSection skills"
                            onMouseEnter={e => {
                                setSkillsA(true)
                            }}
                            onMouseLeave={e => {
                                setSkillsA(false)
                            }}
                    >
                        <h3 className="skillsHeader"
                            style={ skillsA ? { 
                            color: '#6568F4'} : {color: 'white'}}
                        >Programming</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javaLogo" src={java} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsA ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >Java</p>
                            </li>

                            <li className="skillsItem">
                                <img className="javascriptLogo" src={javascript} alt=""/>
                                <p className="logoDescription pc javascriptDesc"
                                    style={ skillsA ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >Javascript</p>
                            </li>

                            <li className="skillsItem">
                                <img className="cplusplusLogo" src={cprogramming} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsA ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >C</p>
                            </li>

                            <li className="skillsItem">
                                <img className="cplusplusLogo" src={cplusplus} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsA ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >C++</p>
                            </li>
                        </ul>

                    </section>

                    <section className="resumeSection skills"
                            onMouseEnter={e => {
                                setSkillsB(true)
                            }}
                            onMouseLeave={e => {
                                setSkillsB(false)
                            }}
                    >
                        <h3 className="skillsHeader"
                            style={ skillsB ? { 
                            color: '#6568F4'} : {color: 'white'}}
                        >Web Development</h3>
                        <div className="vertLine"/>
                        <ul className="skillsList">

                            <li className="skillsItem">
                                <img className="javaLogo" src={html} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsB ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >HTML</p>
                            </li>
                            <li className="skillsItem">
                                <img className="javaLogo" src={css} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsB ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >CSS</p>
                            </li>
                            <li className="skillsItem">
                                <img className="reactLogo" src={reactLogo} alt=""/>
                                <p className="logoDescription pc reactDesc"
                                    style={ skillsB ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >React.js</p>
                            </li>
                            <li className="skillsItem">
                                <img className="tailwindLogo" src={tailwind} alt=""/>
                                <p className="logoDescription pc"
                                    style={ skillsB ? { 
                                    visibility: 'visible',
                                    opacity: '1'} : 
                                    {visibility: 'hidden',
                                    opacity: '0',
                                    transition: 'opacity 300ms, visibility 300ms'
                                    }}
                            >Tailwind CSS</p>
                            </li>
                        </ul>
                    </section>

                    <section className="resumeSection skills"
                            onMouseEnter={e => {
                                setSkillsC(true)
                            }}
                            onMouseLeave={e => {
                                setSkillsC(false)
                            }}
                    >
                        <h3 className="skillsHeader"
                            style={ skillsC ? { 
                            color: '#6568F4'} : {color: 'white'}}
                        >Tech</h3>
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

                    <h2 className="sectionLogo B">Education</h2>
                    <section className="educationSection"
                    >
                        <div className="educationBlock" 
                            onMouseEnter={e => {
                                setEducationA(true)
                            }}
                            onMouseLeave={e => {
                                setEducationA(false)
                            }}
                        >
                            <a 
                                className="educationLink" 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={cogsci}
                            >
                                <div className="blockContent">
                                    <h3 className="educationHeader"
                                        style={ educationA ? { 
                                            color: '#6568F4'} : {color: 'white'}}>
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
                            </a>
                        </div>

                        <div className="educationBlock" 
                            onMouseEnter={e => {
                                setEducationB(true)
                            }}
                            onMouseLeave={e => {
                                setEducationB(false)
                            }}
                        >
                        <a 
                            className="educationLink" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={compsci}
                        >
                            <div className="blockContent">
                                <h3 className="educationHeader"
                                    style={ educationB ? { 
                                    color: '#6568F4'} : {color: 'white'}}
                                >
                                    Computer Science
                                </h3>
                                <p className="educationDescription">Minor</p>

                                <h4 className="educationSchool minor">
                                    University of California<br />
                                    San Diego
                                </h4>

                                <p className="educationDescription">Expected June 2023</p>
                            </div>
                        </a>
                        </div>
                    </section>


                    <h2 className="sectionLogo C">Work Experience</h2>
                    <section className="workSection">

                        <div className="workContent">

                                <h3 className="workHeader title">Work Station and Client Support Technician</h3>
                                <a 
                                    className="workHeader murphy" 
                                    href={murphyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @ Murphy McKay Associates, Inc.
                                </a>
                                <p className="murphyDate">(May 2018 - September 2019)</p>

                                <div className="listBox">
                                    <div className="listContent">
                                        <ul className="murphyList">

                                            <li className="murphyListItem"
                                                onMouseEnter={e => {
                                                    setWorkItemA(true)
                                                }}
                                                onMouseLeave={e => {
                                                    setWorkItemA(false)
                                                }}
                                            >
                                                <i class="fas fa-angle-double-right fa-xl"
                                                    style={ workItemA ? { 
                                                    marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                                    {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                                <p className="murphyDescription"
                                                style={ workItemA ? { 
                                                    top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                                    {top: '5px', transition: 'all 0.2s ease-out'}}
                                                >Tested components, assemblies and systems for well-known clients like Apple, Microsoft and Stanford</p>
                                            </li>

                                            <li className="murphyListItem"
                                                onMouseEnter={e => {
                                                    setWorkItemB(true)
                                                }}
                                                onMouseLeave={e => {
                                                    setWorkItemB(false)
                                                }}
                                            >
                                                <i class="fas fa-angle-double-right fa-xl"
                                                    style={ workItemB ? { 
                                                    marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                                    {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                                <p className="murphyDescription"
                                                style={ workItemB ? { 
                                                    top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                                    {top: '5px', transition: 'all 0.2s ease-out'}}
                                                >Solved tickets related to hardware and software</p>
                                            </li>
                                            <li className="murphyListItem"
                                                onMouseEnter={e => {
                                                    setWorkItemC(true)
                                                }}
                                                onMouseLeave={e => {
                                                    setWorkItemC(false)
                                                }}
                                            >
                                                <i class="fas fa-angle-double-right fa-xl"
                                                    style={ workItemC ? { 
                                                    marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                                    {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                
                                                <p className="murphyDescription"
                                                style={ workItemC ? { 
                                                    top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                                    {top: '5px', transition: 'all 0.2s ease-out'}}
                                                >Identified and evaluated customer problems to ensure that inquiries are resolved
                                                </p>

                                            </li>
                                            <li className="murphyListItem"
                                                onMouseEnter={e => {
                                                    setWorkItemD(true)
                                                }}
                                                onMouseLeave={e => {
                                                    setWorkItemD(false)
                                                }}
                                            >
                                                <i class="fas fa-angle-double-right fa-xl"
                                                    style={ workItemD ? { 
                                                    marginLeft: '10px', transition: 'all 0.2s ease-out', color: 'rgb(50, 53, 212)'} : 
                                                    {marginLeft: '5px', transition: 'all 0.2s ease-out'}}/>
                                                <p className="murphyDescription"
                                                style={ workItemD ? { 
                                                    top: '0px', transition: 'all 0.2s ease-out', color: 'rgb(93, 158, 236)'} : 
                                                    {top: '5px', transition: 'all 0.2s ease-out'}}
                                                >Worked in server rooms and handled hardware equipment</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                

                        </div>


                    </section>




                </div>
            </div>
        </>
    )
}

export default Resume
