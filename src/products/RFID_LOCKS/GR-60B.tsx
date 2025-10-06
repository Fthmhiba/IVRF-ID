import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import GR_60Bimage from '../../assests/products/GR-60B.jpeg'

function GR60B() {
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
                        <h1 className="overlay-text">DIGITAL LOCKS</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>GR-60B</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="text-section">
                                <div style={{ textAlign: "left" }}>
                                    <h5> Various Unlocking Methods</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Passwords (4~12 digits): Up to 4ea </li>
                                        <li>RFID: Up to 100ea</li>
                                        <li>Fingerprint: Up to 100ea </li>
                                        <li>Bluetooth</li>

                                    </ul>

                                    <h5 style={{ marginTop: "1rem" }}> Features</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Smart notifications on outdoor unit </li>
                                        <li>Door thickness: 35~50mm </li>
                                        <li>Door thickness: 35~70mm</li>
                                        <li>Outdoor dimension: 78.2 x 190.3 x 19.1mm  </li>
                                        <li> Indoor dimension: 94 x 185.3 x 51.7mm </li>
                                        <li>Internal and external double-lock function </li>
                                        <li>3 types of alarms: Break-in, high temperature,
                                            and unregistered password for 5 times. </li>
                                        <li>Optional remote control function (447MHz)</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="product-images">
                                <img src={GR_60Bimage} alt="TG_H210image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default GR60B
