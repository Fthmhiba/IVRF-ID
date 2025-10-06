import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import C72 from '../../assests/products/c72.png'
import android from '../../assests/android-os.png'
import UHF from '../../assests/uhf.png'

function C72Handheld() {
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
                        <h1 className="overlay-text">C72 Handheld reader</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>C72 Handheld reader</h2> */}
                    </div>

                    <div className='about-container'>
                        <div className='text-section' style={{ textAlign: "justify" }}>
                            <p >
                                C72 is an Android rugged RFID reader that boasts best-in-class UHF RFID capability. Built with embedded Impinj E710 / R2000, it enables more than 30m of read distance outdoors.

                            </p>
                            <p >
                                The RFID reader features optional barcode scanning, Octa-Core processor and 8000mAh powerful battery to perfectly meet demands in intensive applications, especially in asset management, retail, warehousing, apparel inventory, expressway toll, fleet management, finance, etc
                                .
                            </p></div>

                        <div className="product-images">
                            <img src={C72} alt="C72" />
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
                                        <p style={{ color: "rgb(0, 0, 0)", fontSize: "15px", fontWeight: "800" }}>Android 11</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Functions</h4>
                                    </div>
                                    <div className="product-card">
                                        <img src={UHF} alt='android-os' style={{ width: "100px", height: "100px" }} />
                                        <p style={{ color: "rgb(0, 0, 0)", fontSize: "15px", fontWeight: "800" }}>UHF RFID(Impinj E710 / R2000)</p>
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

export default C72Handheld
