import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';



// import Typewriter from 'react-simple-typewriter'
// import '../../react-simple-typewriter/dist/index.css'

import video1 from '../../assets/techvid1.mp4'
import video2 from '../../assets/techvid2.mp4'



function Home() {
    return (
        <>
            <div className="homeContainer">

                <video src={video1} autoPlay loop muted />
                <h1>greetings.</h1>
                <p>welcome to ben {"&"} queries.</p>

                <Link to="/about">
                    <button className="getStartedButton" type="button">
                        GET STARTED
                    </button>
                </Link>

                {/* <Button>GET STARTED</Button> */}

            </div>
            
        </>
    )
}

export default Home
