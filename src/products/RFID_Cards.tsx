import Header from '../header/header';
import Footer from '../footer/footer';
import aboutbackground from '../assests/aboutbackground.jpeg';
import RFID_Cards_1 from '../assests/products/RFID_Cards_1.jpg';
import RFID_Cards_2 from '../assests/products/RFID_Cards_2.jpg';
import RFID_Cards_3 from '../assests/products/RFID_Cards_3.jpg';
import { Helmet } from 'react-helmet';

function RFIDCards() {
    return (
        <div>
             <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Best RFID Cards in Dubai | Smart Card Supplier"
                />
                <meta
                    name="keywords"
                    content="Best RFID Card in Dubai"
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

            <div className="image-container">
                <img src={aboutbackground} alt="background" className="background-image" />
                <h1 className="overlay-text">RFID Cards</h1>
            </div>

            <div className="unique-whatset-product1">
                <p style={{ textAlign: "justify", padding: "10px" }}>
                    RFID (Radio Frequency Identification) cards are a type of smart card equipped with an embedded RFID chip and antenna. These cards utilize radio frequency waves to wirelessly transmit data to and from RFID readers, enabling a wide range of applications including access control, identification, and asset tracking.
                </p>

                <b style={{ color: "red" }}>Types of RFID Cards include:</b>
                <p className='text-section-product' style={{ textAlign: "justify", padding: "10px" }}><ul> <li>Mifare 13.56 MHz cards</li><li> Mifare ultralight cards</li><li>Mifare DESFire</li><li> Mifare plus SE cards</li><li> ICODE SLI cards</li><li> 125Khz EM Proximity cards</li>
                    <li> T5577 Temic cards</li><li> HID Cards</li><li> UHF Cards</li><li>Dual frequency cards.</li></ul></p>
                <div className="unique-grid-container-product">
                    {/* --- Product 1 --- */}
                    <div className="product-card">
                        <span className="product-number">01</span>
                        <h3 className="product-title">Hotel Key Cards</h3>
                        <p className="product-description">
                            Hotel keycards play a crucial role in ensuring guest safety, security, and convenience during their stay. They provide secure access to accommodations while enabling staff to manage room assignments, track occupancy, and improve operations.
                        </p>
                        <div className="product-image">
                            <img src={RFID_Cards_1} alt="Hotel Key Cards" />
                        </div>
                    </div>

                    {/* --- Product 2 --- */}
                    <div className="product-card">
                        <span className="product-number">02</span>
                        <h3 className="product-title">Wooden Key Cards / Green Keys</h3>
                        <p className="product-description">
                            Wooden keycards are eco-friendly alternatives to plastic cards, crafted from sustainably sourced wood. They combine visual appeal with environmental responsibility, ideal for eco-conscious hotels and resorts.
                        </p>
                        <div className="product-image">
                            <img src={RFID_Cards_2} alt="Wooden Key Cards / Green Keys" />
                        </div>
                    </div>

                    {/* --- Product 3 --- */}
                    <div className="product-card">
                        <span className="product-number">03</span>
                        <h3 className="product-title">NFC Business Cards / Google Review Cards</h3>
                        <p className="product-description">
                            NFC business cards allow seamless sharing of digital content via tap. Google review cards prompt customers to leave feedback on your Google Business listing, boosting credibility and visibility.
                        </p>
                        <div className="product-image">
                            <img src={RFID_Cards_3} alt="NFC Business Cards / Google Review Cards" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RFIDCards;
