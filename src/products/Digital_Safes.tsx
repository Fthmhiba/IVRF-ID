
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import { Helmet } from 'react-helmet'
function DigitalSafes() {
    return (
        <div>
             <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Best Digital Safes for Home | IVRFID Keypad Safe"
                />
                <meta
                    name="keywords"
                    content="best digital safes for home security"
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
                        <h1 className="overlay-text">Digital Safes</h1>
                    </div>
                    <p style={{ textAlign: "justify", padding: "10px" }}>Chubbsafes is one of the oldest safes brand in the world. Trusted the world over
                        , the Chubbsafes solutions have been providing
                        protection around the globe for people, cash and valuables for almost 200 years</p>
                    <p style={{ textAlign: "justify", padding: "10px" }}>The Chubbsafes’ customer base is diverse ranging from householders, small
                        commercial shops, large retail environments,
                        jewelleries to the largest financial institutions and high-risk sites.</p>
                    <div className="unique-whatset-product2">
                        <div>

                            {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Digital Safes</h2> */}
                        </div>

                        <div>

                            <div className="unique-whatset-product1">
                                <div className="unique-grid-container-product">
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Safes</p> */}
                                        <h3 className="product-title">Home Safes</h3>
                                        <p className="product-description">
                                            Chubbsafes’ home safes offer you basic or high burglary protection, or even combined protection against theft and fire. At each security grade, you can choose from a variety of sizes to meet your space and capacity requirements
                                            .....
                                        </p>
                                        <a href="/products/Digital_Safes/Home_Safes" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Safes</p> */}
                                        <h3 className="product-title">Deposit & Graded Safes</h3>
                                        <p className="product-description">
                                            Chubb safes’ deposit safes offer a variety of simple and compact units for under-the-counter use at tills or in offices, ensuring the best in burglary protection for your on-site cash. All our safes offer a high-security solution to meet the needs
                                            .....
                                        </p>
                                        <a href="/products/Digital_Safes/Deposit_Graded_Safes" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>
                                        {/* <p style={{ color: "rgb(214, 0, 0)" }}>Digital Safes</p> */}
                                        <h3 className="product-title">Hotel Safes</h3>
                                        <p className="product-description">
                                            The Chubbsafes Air Hotel is a compact safe providing elementary burglary protection for hotel environments, student accommodation or other locations with frequent occupancy turnover.
                                            Protect your hotel, student residency or other high-turnover accommodation against theft: Chubbsafes’ hotel security boxes are ideal for storing your customers’ cash, valuables     .....
                                        </p>
                                        <a href="/products/Digital_Safes/Hotel_Safes" className="read-more-button">
                                            Read More <span className="arrow">→</span>
                                        </a>
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

export default DigitalSafes
