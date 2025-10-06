import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_C62image from '../../assests/products/LOCK11.png'
function TGC62() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-C62</h2>
                    </div>

                    <div className='about-container'>
                        <div className='text-section'>

                            <ul>
                                <li> Built-in RFID Card reader</li>
                                <li>	Dimension: 76*76*29.5mm</li>
                                <li>	Material: ABS</li>
                                <li>	Power Supply: 3pcs AAA Battery</li>
                                <li>	Auto lock function</li>
                                <li>	Low Power Alarm</li>
                                <li>	Stable performance

                                </li>

                            </ul>
                        </div>

                        <div className="product-images">
                            <img src={TG_C62image} alt="TG_C62image" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGC62
