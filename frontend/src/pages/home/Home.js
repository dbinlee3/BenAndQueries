import React from 'react'
import './home.css'

// import Typewriter from 'react-simple-typewriter'
// import '../../react-simple-typewriter/dist/index.css'

import video1 from '../../assets/techvid1.mp4'
import video2 from '../../assets/techvid2.mp4'



function Home() {
    return (
        <>
            <div className="homeContainer">
                <video src={video1} autoPlay loop muted />
                {/* <div className="content">
                    <div className="homeWrapper">
                        <div className="homeTop">

                            <h2 className="firstLine">Greetings</h2>
                        </div>

                        <div className="homeMid">

                        </div>

                        <div className="getStarted">
                        
                        </div>

                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Home
