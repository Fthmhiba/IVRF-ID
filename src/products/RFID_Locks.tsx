import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import { Helmet } from 'react-helmet'
import RfidLocksFaq from './faq/RfidLocksFaq'
function RFIDLocks() {
    return (
        <div>
            <Helmet>
                            <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                            <meta
                                name="description"
                                content="Best RFID Scanner & Display Locks | IVRFID UAE"
                            />
                            <meta
                                name="keywords"
                                content="Best RFID scanner for supply chain management in UAE"
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
                        <h1 className="overlay-text">RFID LOCKS</h1>
                    </div>

                    <div className="unique-whatset-product1">
                        <div>

                            <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Hotel Locks</h2>
                        </div>
                        <p style={{ textAlign: "justify", padding: "10px" }}>We offer a wide range of electronic hotel lock models for the Hotels and Hospitality sector with access control adaptable to all types of facilities. All electronic lock models provide the security levels required in hotels and offices
                            , both mechanically and electronically, to make guests and employees feel comfortable and safe in your Hotel.</p>
                        <p style={{ textAlign: "justify", padding: "10px" }}>Our Hotel locks from TRUGen UK combines RFID technology with exceptional design to create an ultra-modern and versatile lock. The RFID technology provides enhanced guest convenience and better staff monitoring with more user accountability</p>
                        <div>

                            <div className="unique-whatset-product1">
                                <div className="unique-grid-container-product">
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Hotel Locks</p> */}
                                        <h3 className="product-title">TG-H210</h3>
                                        <p className="product-description">
                                            Suitable for small to very large -scale hotels
                                            ,Vandalism and attack resistant
                                            ,Finish: Satin chrome/ gold
                                            .....
                                        </p>
                                        <a href="/products/RFID_Locks/TG_H210" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Hotel Locks</p> */}
                                        <h3 className="product-title">TG-H232</h3>
                                        <p className="product-description">
                                            UL 180 minutes fire-rated certified
                                            ,IP54 waterproof
                                            ,Classic and elegant design
                                            ,304 stainless steel
                                            .....
                                        </p>
                                        <a href="/products/RFID_Locks/TG_H232" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Hotel Locks</p> */}
                                        <h3 className="product-title">TG-H245</h3>
                                        <p className="product-description">
                                            Ideal for new construction projects or when doors are being replaced
                                            ,	High security and tamperproof design
                                            ,	PVD lacquered finishes, with greater resistance
                                            .....
                                        </p>
                                        <a href="/products/RFID_Locks/TG_H245" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="unique-whatset-product1">
                            <div>
                                <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Digital Locks</h2>
                            </div>
                            <div>

                                <div className="unique-whatset-product2">

                                    <div className="unique-grid-container-product">
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">01</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">GM-1000BK</h3>
                                            <p className="product-description">
                                                Smart notifications on outdoor unit,Internal and external double-lock function,
                                                Backset: 55mm (ABNT Standard) ,Outdoor dimension: 50 x 270 x 23mm
                                                Indoor dimension: 44 x 268 x 40mm.....
                                            </p>
                                            <a href="/products/RFID_Locks/GM_1000BK" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">02</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">GP-6000BAK (Face ID)</h3>
                                            <p className="product-description">
                                                Smart notifications on outdoor unit ,Internal and external double-lock function ,
                                                Outdoor dimension: 90 x 385 x 65.4mm,
                                                Indoor dimension: 90 x 385.5 x 67.4mm....
                                            </p>
                                            <a href="/products/RFID_Locks/GP_6000BAK" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">03</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">GR-60B</h3>
                                            <p className="product-description">
                                                Smart notifications on outdoor unit,
                                                Internal and external double-lock function ,Outdoor dimension: 78.2 x 190.3 x 19.1mm
                                                ,Indoor dimension: 94 x 185.3 x 51.7mm...
                                            </p>
                                            <a href="/products/RFID_Locks/GR_60B" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">04</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">TG-S07</h3>
                                            <p className="product-description">
                                                Ideal for Villas, Offices and residential apartments
                                                Multiple unlock methods including passcode, smart card, fingerprint, mobile App, and mechanical key
                                                .....
                                            </p>
                                            <a href="/products/RFID_Locks/TG_S07" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">05</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">TG-S08</h3>
                                            <p className="product-description">
                                                Ideal for Villas, Offices and residential apartments
                                                Multiple unlock methods including passcode, smart card, fingerprint, mobile App, and  and mechanical key .....
                                            </p>
                                            <a href="/products/RFID_Locks/TG_S08" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>
                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">06</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locks</p> */}
                                            <h3 className="product-title">TG-S04</h3>
                                            <p className="product-description">
                                                TRUGEN TG-S04 Smart Handle is a modern and innovative solution for securing doors, offering
                                                a higher level of convenience and security
                                                compared to traditional locks. These locks are .....
                                            </p>
                                            <a href="/products/RFID_Locks/TG_S04" className="read-more-button">
                                                Read More <span className="arrow">→</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="unique-whatset-product1">
                            <div>
                                <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Digital Cylinders</h2>
                            </div>
                            <div>

                                <div className="unique-whatset-product2">

                                    <div className="unique-grid-container-product">

                                        <div className="product-card">
                                            <div className="relative">
                                                <span className="product-number">01</span>
                                            </div>
                                            {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Cylinders</p> */}
                                            <h3 className="product-title">TG-S01</h3>
                                            <p className="product-description">
                                                Ideal for Airbnb and Holiday homes
                                                Electronic cylinder lock mechanism is an ideal option for modernizing the doors with a mechanical lock and turning them into smart doors
                                                .....
                                            </p>
                                            <a href="/products/RFID_Locks/TG_S01" className="read-more-button">
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
            <RfidLocksFaq />
            <Footer />
        </div>
    )
}

export default RFIDLocks
