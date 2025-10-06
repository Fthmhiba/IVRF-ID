import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_S01image from '../../assests/products/LOCK7.jpg'
function TGS01() {
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
                        <h1 className="overlay-text">Digital Cylinders</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-S01</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div className='text-section'>
                                <ul >
                                    <li>			Ideal for Airbnb and Holiday homes</li>
                                    <li>Electronic cylinder lock mechanism is an ideal option for modernizing the doors with a mechanical lock and turning them into smart doors</li>
                                    <li>Multiple unlock methods including passcode, smart card, fingerprint, mobile App, and mechanical key</li>
                                    <li>High security and tamperproof design</li>
                                    <li>Material: Zinc alloy</li>
                                    <li>Working Voltage: DC 3V (2 x 1.5V AA batteries)</li>
                                    <li>Finish: silver/black</li>
                                    <li>Optical biometric sensor</li>
                                    <li>Audit trail by mobile app</li>

                                </ul>
                            </div>

                            <div className="product-images">
                                <img src={TG_S01image} alt="TG_S01image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGS01
