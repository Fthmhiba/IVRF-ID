import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_S07image from '../../assests/products/LOCK4.jpg'
function TGS07() {
    return (
        <div>
            <Header />
            <div>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background " className="background-image" />
                        <h1 className="overlay-text">Digital Locks</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-S07</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className='text-section'>
                                <ul style={{
                                    textAlign: "left",  // Ensures the text inside the list items is aligned to the left
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li>	Ideal for Villas, Offices and residential apartments</li>
                                    <li>	Multiple unlock methods including passcode, smart card, fingerprint, mobile App, and mechanical key</li>
                                    <li>	High security and tamperproof design</li>
                                    <li>	Material: Zinc alloy</li>
                                    <li>	Working Voltage: DC 6V (4 x 1.5V AA batteries)</li>
                                    <li>	12 Digital touch keypad</li>
                                    <li>	Optical biometric sensor</li>
                                    <li>	Audit trail by mobile app</li>
                                    <li>Finish: Black & Silver</li>

                                </ul>
                            </div>

                            <div className="product-images">
                                <img src={TG_S07image} alt="TG_S07image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGS07
