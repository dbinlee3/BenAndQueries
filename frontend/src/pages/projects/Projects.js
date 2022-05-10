import React from 'react'
import './projects.css'
import chefmedia from '../../assets/chefmedia.png'
import CHEFMEDIA from './descriptions/chefmedia.js'

import benandqueries from '../../assets/benandqueries.png'
import BENANDQUERIES from './descriptions/benandqueries.js'

import cplusplus from '../../assets/compressor.png'
import CPLUSPLUS from './descriptions/cplusplus.js'

function Projects() {

    const chefLink = "https://github.com/dbinlee3/ChefMedia";
    const benLink = "https://github.com/dbinlee3/BenAndQueries";
    const cplusplusLink = "https://github.com/dbinlee3/File-Compressor-Decompressor";

    return (
        <>
            <div className="projectsContainer">
                <div className="projectsFlow">
                    <h1 className="projectsLogo">Projects</h1>

                    {/* CHEFMEDIA */}
                    <section className="entryBox">
                        <div className="entryContent">
                            <div className="entryTitle">

                                <a 
                                    href={chefLink} 
                                    className="entryLogo"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    ChefMedia
                                </a>
                                <p> (in development)</p>
                                <div className="imageBox">
                                    <a
                                        href={chefLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={chefmedia} alt="" className="projectImg" />
                                    </a>
                                </div>
                                
                            </div>

                            <p className="description chefmedia">{CHEFMEDIA}</p>
                        </div>
                    </section> {/* end of entryBox */}

                    {/* BEN & QUERIES */}
                    <section className="entryBox benqueryBox">
                        <div className="entryContent">

                            <div className="entryTitle">
                                <a 
                                    href={benLink} 
                                    className="entryLogo"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    ben {"&"} queries.
                                </a>
                                <div className="imageBox">
                                    <a
                                        href={benLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={benandqueries} alt="" className="projectImg" />
                                    </a>
                                </div>
                                
                            </div>
                            <p className="description benqueryDesc">{BENANDQUERIES}</p>
                        </div>
                    </section>

                    {/* CPLUSPLUS */}
                    <section className="entryBox">
                        <div className="entryContent">

                            <div className="entryTitle">
                                <a 
                                    href={chefLink} 
                                    className="entryLogo cplusplus"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    File Compressor/Decompressor
                                </a>
                                <div className="imageBox">
                                    <a
                                        href={cplusplusLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={cplusplus} alt="" className="projectImg" />
                                    </a>
                                </div>
                                
                            </div>
                            <p className="description cplusplusDesc">{CPLUSPLUS}</p>
                        </div>
                    </section>
                    




                </div> {/* end of projectsFlow */}
            </div> {/* end of projectsContainer */}
        </>
    )
}

export default Projects
