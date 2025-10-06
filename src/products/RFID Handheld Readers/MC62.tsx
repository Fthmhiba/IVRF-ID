import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import MC62image from '../../assests/products/MC62.png'
import android from '../../assests/android-os.png'

function MC62() {
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
                        <h1 className="overlay-text">MC62</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>MC62</h2> */}
                    </div>

                    <div className='about-container'>
                        <div className='text-section' style={{ textAlign: "justify" }}>
                            <p >
                                MC62 is a lightweight and portable high-performance mobile computer. With Android 13, octa-core processor, 4-inch touchscreen and 5000mAh removable battery, the excellent configuration delivers highly efficient operation. It supports barcode scanning, NFC, 13MP camera, multiple wireless connections, and features IP67 protection rating, 1.5 meters drop resistance.
                            </p>
                            <p >
                                The mobile computer is thus widely applicable in various fields including warehousing, logistics, retail, finance, transportation, and manufacturing, helping users significantly improve work efficiency.
                            </p>
                        </div>

                        <div className="product-images">
                            <img src={MC62image} alt="MC62image" />
                        </div>
                    </div>
                    <div className="unique-whatset-product1">
                        <div>
                            <h4 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Features</h4>
                        </div>
                        <div>
                            <div className="unique-whatset-product2">
                                <div className="unique-grid-container-product">
                                    <div className="product-card">
                                        <img src={android} alt='android-os' style={{ width: "100px", height: "100px" }} />
                                        <p style={{ color: "rgb(0, 0, 0)", fontSize: "15px", fontWeight: "800" }}>Android 13</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MC62
