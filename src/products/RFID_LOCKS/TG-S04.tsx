
import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_S07image from '../../assests/products/Lock14.jpg'
function TGS04() {
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
                        <h1 className="overlay-text"> Smart Handle </h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-S04</h2>
                    </div>
                    <div>
                        <div>
                            <div className="relative">
                                <span className="product-number">01</span>
                            </div>
                            <p style={{ textAlign: "justify", padding: "20px" }}>TRUGEN TG-S04 Smart Handle is a modern and innovative solution for securing doors, offering a
                                higher level of convenience and security compared to traditional locks. These locks are equipped
                                with smart technology, allowing users to control access to their premises remotely or
                                using advanced methods like biometric authentication, PIN codes, RFID cards and mobile app</p>
                            <div className='about-container'>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className='text-section'>

                                    <ul style={{
                                        textAlign: "left",  // Ensures the text inside the list items is aligned to the left
                                        padding: 0,
                                        margin: 0
                                    }}>

                                        <li>Ideal for Villas, Offices and residential apartments</li>
                                        <li>	Ideal for residential, serviced apartments, Offices and Holiday homes. </li>
                                        <li>	Multiple unlock methods including passcode, smart card, fingerprint, mobile App, and mechanical key</li>
                                        <li>	Fingerprint, Password and Card: 200 users </li>
                                        <li>	Bluetooth key by TRUGen mobile App </li>
                                        <li>	Power: 6V (4 x AA batteries) </li>
                                        <li>	Material: Zinc Alloy </li>
                                        <li>	Finish: Black & Silver</li>



                                    </ul>
                                </div>

                                <div className="product-images">
                                    <img src={TG_S07image} alt="TG_S07image" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGS04
