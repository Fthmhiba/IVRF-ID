import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_C16image from '../../assests/products/TG_C16image.jpg'
function TGC16() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-C16</h2>
                    </div>

                    <div className='about-container'>
                        <div className='text-section'>

                            <ul >
                                <li>Operation: Password and RFID Card.</li>
                                <li>Built-in alarm functions – wrong pin, low voltage</li>
                                <li>TG-C16 is suitable for Wood, Steel, and Aluminum doors</li>
                                <li>TG-C16 is suitable for Wood, Steel, and Aluminum doors</li>
                                <li>Up to 25,000 operations battery life</li>
                                <li>Up to 50 users per lock</li>
                                <li>Audible confirmation of lock operation
                                </li>
                                <li>Type C port is available for emergency opening
                                </li>
                                <li>Finish: Black & Silver
                                </li>

                            </ul>
                        </div>
                        <div className="product-images">
                            <img src={TG_C16image} alt="TG_C16image" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGC16
