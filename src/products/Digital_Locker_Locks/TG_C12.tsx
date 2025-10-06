import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_H232image from '../../assests/products/LOCK12.png'
function TGC12() {
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
                        <h1 className="overlay-text"> DIGITAL LOCKER LOCKS</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-C12</h2>
                    </div>

                    <div className='about-container'>
                        <div className='text-section'>
                            <ul >
                                <li> RFID Card Access</li>
                                <li>	Dimension: 70*59*8.8mm</li>
                                <li>	Material: Zinc Alloy / ABS</li>
                                <li>	Power Supply: 3pcs AAA Battery</li>
                                <li>	Touch Screen Keypad</li>
                                <li>	Low Power Alarm</li>
                                <li>	External power override for Emergency opening
                                </li>

                            </ul>
                        </div>

                        <div className="product-images">
                            <img src={TG_H232image} alt="TG_H232image" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGC12
