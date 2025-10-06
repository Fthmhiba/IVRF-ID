import Header from '../header/header';
import Footer from '../footer/footer';
import Solutions_background from '../assests/Solutions_background.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS1 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-1.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS2 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-2.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS3 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-3.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS4 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-4.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS5 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-5.jpg';
import RFID_DISPLAY_CASE_LOCKING_SOLUTIONS6 from '../assests/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS-6.jpg';
import Furniture_Locks2 from '../assests/solutions/Furniture_Locks2.png';
import Furniture_Locks3 from '../assests/solutions/Furniture_Locks3.png';
import used_by1 from '../assests/solutions/usedby1.png';
import used_by2 from '../assests/solutions/usedby2.png';
import used_by3 from '../assests/solutions/usedby3.png';
import used_by4 from '../assests/solutions/usedby4.png';
import used_by5 from '../assests/solutions/usedby5.png';
import used_by6 from '../assests/solutions/usedby6.png';
import elelock_logo from '../assests/solutions/elelock_logo.jpg';
import './solutions.css';
import { Helmet } from 'react-helmet';

function RFIDDISPLAYCASELOCKINGSOLUTIONS() {
    return (
        <div>
             <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="IVRFID Display Case RFID Locking Solutions"
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
            <div style={{ backgroundColor: "#d8d8d8de" }}>
                <div className="image-container">
                    <img src={Solutions_background} alt="background" className="background-image" />
                    <h1 className="overlay-text">RFID DISPLAY CASE LOCKING SOLUTIONS</h1>
                </div>
                <div className="rfid-solutions-container">

                    <div className="rfid-content">
                        <img src={elelock_logo} alt='logo' />
                        <h2 className="rfid-heading">
                            IV RFID – Proud Distributor and Partner of ELELOCK UK</h2>
                        <p className="rfid-description" style={{ textAlign: "justify" }}>
                            As a trusted distributor and partner of ELELOCK, IV RFID brings advanced security solutions to
                            the forefront of the retail and display case industries.
                        </p>
                        <p className="rfid-description" style={{ textAlign: "justify" }}>
                            ELELOCK from UK, Leaders in Electronic Display Case locking, Jewelry Showcase security,
                            High-End Retail access control, smart locking for joineries, and luxury boutique security.
                        </p>
                        <div className="rfid-image-gallery">
                            <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS1} alt='Locking Solution' />
                            <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS2} alt='Locking Solution' />
                            <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS3} alt='Locking Solution' />
                        </div>
                        <p style={{ textAlign: "justify" }}>At ELELOCK, we specialize in providing cutting-edge locking systems that offer unmatched security for your valuable assets. Based in the UK, ELELOCK has established itself as a trusted name in the retail security industry. Our range of display case locking systems and jewelry showcase security solutions are designed to protect high-value items with reliability and ease of use</p>
                        <h4 className="rfid-subheading">Product Range:</h4>
                        <br />
                        <br />
                        <div className="rfid-product-section">
                            <div className="rfid-product">
                                <h3>ELELOCK PRO</h3>
                                <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS4} alt='ELELOCK PRO' style={{ width: "280px", height: "280px" }} />
                            </div>
                            <div className="rfid-product">
                                <h3>ELELOCK Nano</h3>
                                <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS5} alt='ELELOCK Nano' style={{ width: "280px", height: "280px" }} />
                            </div>
                            <div className="rfid-product">
                                <h3>ELELOCK Multi Door</h3>
                                <img src={RFID_DISPLAY_CASE_LOCKING_SOLUTIONS6} alt='ELELOCK Multi Door' style={{ width: "280px", height: "280px" }} />
                            </div>
                        </div>
                        <h4 className="rfid-subheading">Key Features</h4>
                        <ul className="rfid-key-features">
                            <li>Built-in MIFARE Classic® or ultra-secure DESFire® EV3 card reader with AES encryption</li>
                            <li>Supports up to 50-500 users</li>
                            <li>Integrated break-in alarm and LED indicators</li>
                            <li>Bluetooth-enabled for easy access via mobile devices</li>
                            <li>High read range of up to 60mm</li>
                        </ul>
                        <h4 className="rfid-subheading">Furniture Locks</h4>
                        <div className="rfid-furniture-gallery">
                            {/* <img src={Furniture_Locks1} alt='Furniture Lock' /> */}
                            <img src={Furniture_Locks2} alt='Furniture Lock' style={{ width: "200px", height: "200px", marginRight: "10px", paddingRight: "20px" }} />
                            <img src={Furniture_Locks3} alt='Furniture Lock' />
                        </div>
                        <br />                        <br />
                        <p style={{ textAlign: "justify" }}>Compact electronic locks designed specifically for cabinet applications. The compact size makes it suitable for many small enclosure applications with advanced features such as door status monitoring, field selectable Fail Locked / Fail Unlocked modes, spring eject/pull open and mechanical emergency release.</p>
                        <p style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <i>Specifications:</i>
                            <ul style={{ listStyle: "circle", paddingLeft: "20px", textAlign: "left" }}>
                                <li>Operating Voltage: 12V DC</li>
                                <li>Operating Temp: -40°C to +75°C (5 to 95% RH)</li>
                                <li>Static Holding Force: Approx 250kg</li>
                                <li>Reliable and secure</li>
                                <li>Low power and cost effective</li>
                                <li>Simple to install</li>
                                <li>The ELELOCK furniture locks are a versatile electronic locking solution for your small enclosure applications</li>
                            </ul>
                        </p>

                    </div>
                    <br />
                    <h2 style={{ textAlign: "center", color: "blue" }}>Used By</h2>
                    <div className="rfid-usedby">

                        <img src={used_by1} alt='used by' />
                        <img src={used_by2} alt='used by' />
                        <img src={used_by3} alt='used by' />
                        <img src={used_by4} alt='used by' />
                        <img src={used_by5} alt='used by' />
                        <img src={used_by6} alt='used by' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RFIDDISPLAYCASELOCKINGSOLUTIONS;
