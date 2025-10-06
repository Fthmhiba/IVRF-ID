import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import GM_1000BKimage from '../../assests/products/GM_1000BK.jpeg'

function GM1000BK() {
    return (
        <div>
            <Header />
            <div>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background" className="background-image" />
                        <h1 className="overlay-text">DIGITAL LOCKS</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>GM-1000BK</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="text-section">
                                <div style={{ textAlign: "left" }}>
                                    <h5> Various Unlocking Methods</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Passwords (4~12 digits): Up to 4</li>
                                        <li>RFID cards: Up to 100</li>
                                        <li>Fingerprints: Up to 100</li>
                                        <li>Mechanical keys: 2</li>
                                        <li>Bluetooth (Optional)</li>
                                    </ul>

                                    <h5 style={{ marginTop: "1rem" }}> Features</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Smart notifications on outdoor unit</li>
                                        <li>Internal and external double-lock function</li>
                                        <li>Door thickness: 35~70mm</li>
                                        <li>Backset: 55mm (ABNT Standard)</li>
                                        <li>Outdoor dimension: 50 x 270 x 23mm</li>
                                        <li>Indoor dimension: 44 x 268 x 40mm</li>
                                        <li>3 types of alarms: Break-in, high temperature, and unregistered password (5 failed attempts)</li>
                                        <li>Optional remote control function (447MHz)</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="product-images">
                                <img src={GM_1000BKimage} alt="TG_H210image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default GM1000BK
