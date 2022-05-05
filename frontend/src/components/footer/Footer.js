import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className="footerContainer">
                <section className="footerSubscription">
                    <p className="footerSubscriptionHeading">
                        This is the footer
                    </p>
                </section>

                <div className="footerLinks">
                    <div className="footerLinkWrapper">

                        <div className="footerLinkItems">
                            <h2>ben {"&"} queries.</h2>

                        </div>

                        <div className="footerLinkItems">
                            <h2>Contact</h2>
                            <div className="footerEmail">dbinlee.3@gmail.com</div>
                            
                        </div>

                    </div>
                </div>

                <section className="socialMedia">
                    <div className="socialMediaWrap">
                        <div className="footerLogo">
                            
                        </div>
                    </div>
                </section>



            </div>
        </>
    )
}

export default Footer
