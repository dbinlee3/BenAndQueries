import React from 'react'
import './projects.css'

import chadleyPic from '../../assets/chadley.png'
import chadleyDesc from './descriptions/chadley.js'

import chefmedia from '../../assets/chefmedia.png'
import CHEFMEDIA from './descriptions/chefmedia.js'

import benandqueries from '../../assets/benandqueries.png'
import BENANDQUERIES from './descriptions/benandqueries.js'

import cplusplus from '../../assets/compressor.png'
import CPLUSPLUS from './descriptions/cplusplus.js'

import Project from '../../components/project/Project'

function Projects() {

    const chadleyLink = "http://chadley-the-ai.com"
    const chefLink = "https://github.com/dbinlee3/ChefMedia";
    const benLink = "https://github.com/dbinlee3/BenAndQueries";
    const cplusplusLink = "https://github.com/dbinlee3/File-Compressor-Decompressor";

    return (
        <>
            <div className="projectsContainer">
                <div className="projectsFlow">
                    <h1 className="projectsLogo">Projects</h1>

                    <Project 
                        name="Chadley The AI" 
                        inDev={false}
                        image={chadleyPic}
                        link={chadleyLink}
                        description={chadleyDesc}
                    />

                    <Project 
                        name="ChefMedia" 
                        inDev={true}
                        image={chefmedia}
                        link={chefLink}
                        description={CHEFMEDIA}
                    />

                    <Project 
                        name={"ben & queries"}
                        inDev={false}
                        image={benandqueries}
                        link={benLink}
                        description={BENANDQUERIES}
                    />

                    <Project 
                        name="File Compressor" 
                        inDev={false}
                        image={cplusplus}
                        link={cplusplusLink}
                        description={CPLUSPLUS}
                    />

                </div> {/* end of projectsFlow */}
            </div> {/* end of projectsContainer */}
        </>
    )
}

export default Projects
