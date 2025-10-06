import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_C90image from '../../assests/products/LOCK10.jpeg'
function TGC90() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-C90</h2>
                    </div>

                    <div className='about-container'>
                        <div className='text-section'>

                            <ul>
                                <li>RFID Card Access (Keypad optional)</li>
                                <li>	Dimension: 108.2*54*10.7mm</li>
                                <li>	Material: Zinc Alloy / ABS</li>
                                <li>	Power Supply: 6V, 4pcs AA Battery</li>
                                <li>	Touch Screen Keypad</li>
                                <li>	Low Power Alarm</li>
                                <li>	External power override for Emergency opening


                                </li>

                            </ul>
                        </div>

                        <div className="product-images">
                            <img src={TG_C90image} alt="TG_C90image" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGC90
