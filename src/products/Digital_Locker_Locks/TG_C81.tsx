import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_C81image from '../../assests/products/LOCK9.png'
function TGC81() {
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
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-C81</h2>
                    </div>

                    <div className='about-container'>
                        <div className='text-section'>
                            <ul >
                                <li>	Keypad Access</li>
                                <li>	Dimension: 132.5*31.4*13mm</li>
                                <li>	Material: Zinc Alloy / ABS</li>
                                <li>	Power Supply: Button cell</li>
                                <li>	Touch Screen Keypad</li>
                                <li>	Low Power Alarm</li>
                                <li>	Mechanical Key option


                                </li>

                            </ul>
                        </div>

                        <div className="product-images">
                            <img src={TG_C81image} alt="TG_C81image" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGC81
