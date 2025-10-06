import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_H232image from '../../assests/products/LOCK2.jpg'
function TGH232() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}> TG-H232 </h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className='text-section'>
                                <ul style={{
                                    textAlign: "left",  // Ensures the text inside the list items is aligned to the left
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li>UL 180 minutes fire-rated certified</li>
                                    <li>IP54 waterproof</li>
                                    <li>Classic and elegant design</li>
                                    <li>304 stainless steel</li>
                                    <li>Finish: Silver, Black, Gold, polished chrome</li>
                                    <li>Frequency: Mifare 13.56 Mhz</li>
                                    <li>Working Voltage: DC 6V (4 x 1.5V AA batteries)</li>
                                    <li>Mechanical key for emergency</li>
                                    <li>Works with TRUGen Hotel management software</li>
                                </ul>
                            </div>




                            <div className="product-images">
                                <img src={TG_H232image} alt="TG_H232image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGH232
