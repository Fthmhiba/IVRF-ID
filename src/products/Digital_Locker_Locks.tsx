
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import { Helmet } from 'react-helmet'
import DigitalLocker_Faq from './faq/digitalLocker_Faq'
function DigitalLockerLocks() {
    return (
        <div>
             <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Best Smart Locker Locks | RFID Card | IVRFID"
                />
                <meta
                    name="keywords"
                    content="RFID card locker lock"
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
            <div style={{ backgroundColor: "#d8d8d8de" }}>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background " className="background-image" />
                        <h1 className="overlay-text">Digital Locker Locks</h1>
                    </div>
                    <p style={{ textAlign: "justify", padding: "20px" }}>Our advanced cabinet locking solution offers top-tier security with encrypted data protection,
                        ensuring only authorized access. Designed for both residential and commercial spaces, these
                        locks provide a seamless, keyless entry system for enhanced convenience. With durable
                        construction and smart technology integration, our cabinet locks safeguard your valuables
                        against unauthorized access, making them ideal for homes, offices, hospitals, and retail
                        environments. Experience peace of mind with a reliable, tamper-proof locking mechanism that
                        blends security and ease of use effortlessly.
                    </p>
                    <div className="unique-whatset-product2">
                        <div>

                            {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Digital Locker Locks</h2> */}
                        </div>

                        <div>

                            <div className="unique-whatset-product1">
                                <div className="unique-grid-container-product">
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locker Locks</p> */}
                                        <h3 className="product-title">TG-C16</h3>
                                        <p className="product-description">
                                            Operation: Password and RFID Card
                                            ,	Built-in alarm functions – wrong pin, low voltage
                                            ,	TG-C16 is suitable for Wood, Steel, and Aluminum doors
                                            ,	TG-16 Support one-time password/card

                                            .....
                                        </p>
                                        <a href="/products/Digital_Locker_Locks/TG_C16" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locker Locks</p> */}
                                        <h3 className="product-title">TG-C81</h3>
                                        <p className="product-description">
                                            Keypad Access
                                            ,	Dimension: 132.5*31.4*13mm
                                            ,	Material: Zinc Alloy / ABS
                                            ,	Power Supply: Button cell


                                            .....
                                        </p>
                                        <a href="/products/Digital_Locker_Locks/TG_C81" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locker Locks</p> */}
                                        <h3 className="product-title">TG-C90</h3>
                                        <p className="product-description">
                                            RFID Card Access (Keypad optional)
                                            ,	Dimension: 108.2*54*10.7mm
                                            ,	Material: Zinc Alloy / ABS
                                            ,	Power Supply: 6V, 4pcs AA Battery

                                            .....
                                        </p>
                                        <a href="/products/Digital_Locker_Locks/TG_C90" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">04</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locker Locks</p> */}
                                        <h3 className="product-title">TG-C62</h3>
                                        <p className="product-description">
                                            Built-in RFID Card reader
                                            ,Dimension: 76*76*29.5mm
                                            ,	Material: ABS

                                            .....
                                        </p>
                                        <a href="/products/Digital_Locker_Locks/TG_C62" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">05</span>
                                        </div>

                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Locker Locks</p> */}
                                        <h3 className="product-title">TG-C12</h3>
                                        <p className="product-description">
                                            RFID Card Access
                                            ,	Dimension: 70*59*8.8mm
                                            ,	Material: Zinc Alloy / ABS
                                            ,	Power Supply: 3pcs AAA Battery

                                            .....
                                        </p>
                                        <a href="/products/Digital_Locker_Locks/TG_C12" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DigitalLocker_Faq />
            <Footer />
        </div>
    )
}

export default DigitalLockerLocks
