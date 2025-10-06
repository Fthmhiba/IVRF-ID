
import BLE_Tracking_Solutions1 from '../assests/solutions/BLE_Tracking_Solutions-1.jpeg';
import BLE_Tracking_Solutions2 from '../assests/solutions/BLE_Tracking_Solutions-2.jpeg';
import BLE_Tracking_Solutions3 from '../assests/solutions/BLE_Tracking_Solutions-3.jpeg';

import Header from '../header/header'
import Footer from '../footer/footer'
import Solution_background from '../assests/Solutions_background.jpg'
import { Helmet } from 'react-helmet';

function RFIDHotelLockingSolutions() {
    return (
        <div>
            <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="RFID Hotel Locking Solutions | Smart & Secure Room Access Systems"
                />
                <meta
                    name="keywords"
                    content="RFID Hotel locking solutions"
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
                        <img src={Solution_background} alt="background" className="background-image" />
                        <h1 className="overlay-text">RFID Hotel Locking Solutions</h1>
                    </div>

                    <div className="unique-whatset-product1">
                        <div>

                            {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>RFID Hotel Locking Solutions</h2> */}
                        </div>
                        <p style={{ textAlign: "justify", padding: "10px" }}>RFID hotel locking solutions revolutionize the hospitality industry by providing secure,
                            convenient, and efficient access control for hotel guests and staff. Leveraging Radio Frequency Identification (RFID) technology, these systems offer keyless entry and advanced security features, enhancing the guest
                            experience while improving operational efficiency for hotel management.</p>
                        <div>
                            <div className="rfid-image-gallery">
                                <img src={BLE_Tracking_Solutions1} alt='Locking Solution' />
                                <img src={BLE_Tracking_Solutions2} alt='Locking Solution' />
                                <img src={BLE_Tracking_Solutions3} alt='Locking Solution' />
                            </div>
                            <div className="unique-whatset-product1">
                                <h2>Key Components</h2>
                                <div className="unique-grid-container-product">

                                    <div className="solution-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        <h3 className="product-title">RFID Locks</h3>
                                        <p className="product-description">
                                            Specialized door locks equipped with RFID readers and mechanisms to grant
                                            access to authorized individuals. These locks may be
                                            installed on guest room doors, staff areas, and other restricted locations within the hotel.

                                        </p>

                                    </div>

                                    <div className="solution-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>

                                        <h3 className="product-title">RFID Key Cards or Mobile Credentials </h3>
                                        <p className="product-description">
                                            RFID-enabled key cards or virtual credentials stored on smartphones, granting guests access to their assigned rooms and hotel amenities.

                                        </p>

                                    </div>
                                    <div className="solution-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>

                                        <h3 className="product-title">Hotel Locking Management Software</h3>
                                        <p className="product-description">
                                            A centralized software platform that manages and controls the RFID locking system. This system enables
                                            hotel staff to assign access permissions, monitor access logs, and remotely manage locks in real-time.
                                        </p>

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

export default RFIDHotelLockingSolutions
