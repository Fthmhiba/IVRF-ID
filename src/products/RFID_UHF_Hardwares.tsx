import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import Uhf_Faq from './faq/Uhf_Faq'
import { Helmet } from 'react-helmet'
function RFIDUHFHardwares() {
    return (
        <div>
            <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Top UHF RFID Hardware & Locker Locks in Dubai"
                />
                <meta
                    name="keywords"
                    content="Top UHF RFID hardware suppliers in Dubai"
                />
                {/* <meta property="og:title" content="RFID UHF Hardware - IV RFID Solutions" />
                <meta
                    property="og:description"
                    content="Discover our powerful UHF RFID hardware lineup including handheld devices, fixed readers, and antennas. Ideal for robust tracking solutions."
                />
                <meta
                    property="og:image"
                    content="https://example.com/rfid-uhf-hardware.jpg"
                /> */}
            </Helmet>
            <Header />
            <div>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background " className="background-image" />
                        <h1 className="overlay-text">RFID UHF Hardwares</h1>
                    </div>

                    <div className="unique-whatset-product1">
                        <div>

                            <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>	RFID Handheld Readers</h2>
                        </div>
                        <div>

                            <div className="unique-whatset-product1">
                                <div className="unique-grid-container-product">
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>RFID Handheld Readers</p> */}
                                        <h3 className="product-title">C72 Handheld reader</h3>
                                        <p className="product-description">
                                            C72 is an Android rugged RFID reader that boasts best-in-class UHF RFID capability.
                                            Built with embedded Impinj E710 / R2000, it enables more than .....
                                        </p>
                                        <a href="/products/RFID_UHF_Hardwares/C72_Handheld" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>RFID Handheld Readers</p> */}
                                        <h3 className="product-title">MC62</h3>
                                        <p className="product-description">
                                            MC62 is a lightweight and portable high-performance mobile computer. With Android 13,
                                            octa-core processor, 4-inch touchscreen and 5000mAh removable battery, .....
                                        </p>
                                        <a href="/products/RFID_UHF_Hardwares/MC62" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>RFID Handheld Readers</p> */}
                                        <h3 className="product-title">MC50</h3>
                                        <p className="product-description">
                                            MC50 UHF is a 5G handheld reader integrates with Impinj E710 and supports
                                            Impinj Gen2X, it offers unparalleled UHF performance and a convenient  .....
                                        </p>
                                        <a href="/products/RFID_UHF_Hardwares/MC50" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="unique">
                        <div className="unique-whatset-product1">
                            <div>
                                <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>RFID Fixed Readers</h2>
                            </div>
                            <div>

                                <div className="unique-whatset-product2">

                                    <div className="unique-grid-container-product">

                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">01</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>RFID Fixed Readers</p> */}
                                            <h3 className="product-title">Zebra FX9600</h3>
                                            <p className="product-description">
                                                The Zebra Fixed UHF RFID Readers delivers the performance and features you need
                                                to handle it all. With support for Power over Ethernet, IP53 sealing  .....
                                            </p>
                                            <a href="/products/RFID_UHF_Hardwares/RFID_Fixed_Readers" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="unique-whatset-product1">
                            <div>
                                <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>UHF Antennas</h2>
                            </div>
                            <div>

                                <div className="unique-whatset-product2">

                                    <div className="unique-grid-container-product">

                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">01</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>UHF Antennas</p> */}
                                            <h3 className="product-title">RFID Antennas</h3>
                                            <p className="product-description">
                                                Zebra antennas features a high front-to-rear ratio, narrow side-lobe,
                                                and gain, ensuring stable performance and the ability to read multiple tags  .....
                                            </p>
                                            <a href="/products/RFID_UHF_Hardwares/RFID_Antennas" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Uhf_Faq />
            <Footer />
        </div>
    )
}

export default RFIDUHFHardwares
