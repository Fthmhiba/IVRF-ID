import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_H210image from '../../assests/products/LOCK1.jpg'

function TGH210() {
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
                        <h1 className="overlay-text">HOTEL LOCKS</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-H210</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className='text-section'>
                                <ul style={{
                                    textAlign: "left",  // Ensures the text inside the list items is aligned to the left
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li>Suitable for small to very large-scale hotels</li>
                                    <li>Vandalism and attack resistant</li>
                                    <li>Finish: Satin chrome/ gold</li>
                                    <li>Frequency: Mifare 13.56 Mhz</li>
                                    <li>Working Voltage: DC 6V (4 x 1.5V AA batteries)</li>
                                    <li>Mechanical key for emergency</li>
                                    <li>CE certified and fire rated</li>
                                    <li>Works with TRUGen Hotel management software</li>
                                </ul>
                            </div>

                            <div className="product-images">
                                <img src={TG_H210image} alt="TG_H210image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGH210
