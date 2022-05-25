import React from 'react'
import './project.css'

const Project = ({ name, inDev, image, link, description}) => {

    function handleDev(inDev) {
        if (inDev) {
            return "\n(in development)";
        }

        return "";
    }


    return (
        <>
            <section className="entryBox">
                <div className="entryContent">
                    <div className="entryTitle">

                        <a 
                            href={link} 
                            className="entryLogo"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {name}
                        </a>
                        <p>{handleDev(inDev)}</p>
                        
                        <div className="imageBox">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={image} alt="" className="projectImg" />
                            </a>
                        </div>
                        
                    </div>

                    <p className="description">{description}</p>
                </div>
            </section>
        </>
    )
}

export default Project
