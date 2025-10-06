import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import GP_6000BAKimage from '../../assests/products/GP_6000BAK.jpeg'

function GP6000BAK() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>GP-6000BAK (Face ID)</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="text-section">
                                <div style={{ textAlign: "left" }}>
                                    <h5> Various Unlocking Methods</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Face ID Authentication </li>
                                        <li>Passwords (4~12 digits): Up to 4ea</li>
                                        <li>RFID cards: Up to 100ea</li>
                                        <li>Mechanical keys: 2ea</li>
                                        <li>Fingerprint</li>
                                        <li>Wi-Fi</li>
                                    </ul>

                                    <h5 style={{ marginTop: "1rem" }}> Features</h5>
                                    <ul style={{ paddingLeft: "20px" }}>
                                        <li>Smart notifications on outdoor unit</li>
                                        <li>Internal and external double-lock function</li>
                                        <li>Outdoor dimension: 90 x 385 x 65.4mm  </li>
                                        <li>Indoor dimension: 90 x 385.5 x 67.4mm </li>
                                        <li>Door thickness: 40~80mm </li>
                                        <li>3 types of alarms: Break-in, high temperature,
                                            and unregistered password for 5 times.</li>
                                        <li>Optional remote control function (447MHz)</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="product-images">
                                <img src={GP_6000BAKimage} alt="TG_H210image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default GP6000BAK
