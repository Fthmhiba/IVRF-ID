import './product.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import TAG1 from '../assests/products/TAG1.jpg'
import TAG2 from '../assests/products/TAG2.jpg'
import TAG3 from '../assests/products/TAG3.png'
import TAG4 from '../assests/products/TAG4.png'
import TAG5 from '../assests/products/TAG5.jpg'
import TAG6 from '../assests/products/TAG6.png'
import TAG7 from '../assests/products/TAG7.jpg'
import TAG8 from '../assests/products/TAG8.jpg'
import TAG9 from '../assests/products/TAG9.jpg'
import TAG10 from '../assests/products/TAG10.jpg'
import RfidtagFaq from './faq/RfidtagFaq'
import { Helmet } from 'react-helmet'

function RFIDTags() {
    return (
        <div>
             <Helmet>
                <title>RFID Tags - IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Best RFID Tags in Dubai & UAE | Top Quality Tags"
                />
                <meta
                    name="keywords"
                    content="Best RFID tags in Dubai"
                />
                {/* <meta property="og:title" content="RFID Tags - IV RFID Solutions" />
                <meta
                    property="og:description"
                    content="Discover high-performance RFID tags for diverse applications like logistics, healthcare, retail, and more from IV RFID Solutions."
                />
                <meta
                    property="og:image"
                    content="https://example.com/rfid-tags-preview.jpg"
                /> */}
            </Helmet>
            <Header />
            <br />
            <br />
            <br />
            <div>
                <div className="image-container">
                    <img src={aboutbackground} alt="background " className="background-image" />
                    <h1 className="overlay-text">RFID Tags</h1>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h4 style={{ color: "red", textAlign: "center" }}> Products</h4> */}
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Products</h2> */}
                        <p style={{ textAlign: "justify", padding: "10px" }}>UHF RFID Tags are a type of passive RFID tag that is commonly used for asset tracking. RFID labels have a read range that can vary depending on the size of the tag and the specific RFID application, but can typically be read from several meters away. This makes them ideal for tracking assets across large areas or in complex environments.</p>
                    </div>
                    <div>
                        <div>
                            <div className="unique-whatset-product1">

                                <div className="unique-grid-container-product">

                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">01</span>
                                        </div>
                                        <h3 className="product-title">On Metal RFID Tags</h3>
                                        <ul className="product-description">
                                            <li>Operating Frequency: Global (865-928 MHz)</li>
                                            <li><strong>IC type:</strong> Impinj Monza R6P or Monza M730</li>
                                            <li>Memory: EPC 96 bits, TID 48 bits</li>
                                            <li>Read range: up to 6 m</li>
                                            <li>Applicable Surface Materials: All surfaces, optimized for metal</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG1} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">02</span>
                                        </div>
                                        <h3 className="product-title">Non-Metal RFID Tags</h3>
                                        <ul className="product-description">
                                            <li>Operating Frequency: Global (865-928 MHz)</li>
                                            <li><strong>IC type:</strong>NXP UCODE 8/9</li>
                                            <li>Memory: EPC 96 bits, TID 48 bits</li>
                                            <li>Read range: up to 10 m</li>
                                            <li>Applicable Surface Materials: Non-metallic surfaces</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG2} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">03</span>
                                        </div>
                                        <h3 className="product-title">RFID ABS Tags</h3>
                                        <ul className="product-description">
                                            <li>IP67 rating</li>
                                            <li>Operating Frequency: Global (865-928 MHz)</li>
                                            <li>Durable outdoor resistant & high-level RF performance</li>
                                            <li><strong>IC type:</strong>NXP UCODE 8/ Impinj Monza</li>
                                            <li>Memory: EPC 128 bits, TID 96 bits</li>
                                            <li>Read range: up to 8 m</li>
                                            <li>Applicable Surface Materials: All surface</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG3} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">04</span>
                                        </div>
                                        <h3 className="product-title">RFID Cable Tie Tags</h3>
                                        <ul className="product-description">
                                            <li>IP67 rating</li>
                                            <li>Operating Frequency: Global (865-928 MHz)</li>
                                            <li>Durable outdoor resistant & high level RF performance</li>
                                            <li><strong>IC type:</strong>NXP UCODE 8/ Impinj Monza</li>
                                            <li>Memory: EPC 128 bits, TID 96 bits</li>
                                            <li>Read Range: up to 10 m</li>
                                            <li>Applicable Surface Materials: All surfaces</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG4} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">05</span>
                                        </div>
                                        <h3 className="product-title">RFID Windshield tags</h3>
                                        <ul className="product-description">
                                            <li>Operating Frequency: Global (865- 868 MHz)</li>
                                            <li><strong>IC type:</strong> Impinj Monza 4 QT/ Impinj M781</li>
                                            <li>Memory: EPC 128 bits, TID 96 bits</li>
                                            <li>Read range: up to 10 m</li>
                                            <li>Designed to be used in automatic vehicle identification applications</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG5} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">06</span>
                                        </div>
                                        <h3 className="product-title">RFID Tire tags</h3>
                                        <ul className="product-description">
                                            <li>Operating Frequency: Global (865- 868 MHz)</li>
                                            <li><strong>IC type:</strong> Impinj Monza R6P</li>
                                            <li>Memory: EPC 128 bits, TID 96 bits</li>
                                            <li>Read Range: up to 10 m</li>
                                            <li>Designed to track tires in bus groups and logistics fleet tire management.</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG6} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">07</span>
                                        </div>
                                        <h3 className="product-title">RFID Laundry Tags</h3>
                                        <ul className="product-description">
                                            <li>Waterproof fabric design</li>
                                            <li>Operating Frequency: Global (865-928 MHz)</li>
                                            <li><strong>IC type:</strong>NXP UCODE 8</li>
                                            <li>Memory: EPC 96 bits, TID 48 bits</li>
                                            <li>Read range: Up to 8 m</li>
                                            <li>Applicable for laundry management</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG7} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">08</span>
                                        </div>
                                        <h3 className="product-title">RFID Library Tags</h3>
                                        <ul className="product-description">
                                            <li>HF RFID Tag for Library management</li>
                                            <li>Operating Frequency: 13.56 MHz</li>
                                            <li><strong>IC type:</strong> NXP ICODE SLIX I SLIX 2</li>
                                            <li>Memory: 1024 bits/2560 bits EEPROM Read/Write</li>
                                            <li>Read range: Up to 2 m</li>
                                            <li>Applicable for library management</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG8} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">09</span>
                                        </div>
                                        <h3 className="product-title">Epoxy RFID /NFC Tags</h3>
                                        <ul className="product-description">
                                            <li>Operating Frequency: 13.56 MHz & 125Khz </li>
                                            <li>High-quality epoxy resin, providing a durable and long-lasting</li>
                                            <li>Can store a small amount of data, such as a URL or a unique identifier.
                                                When tapped with an NFC-enabled device, users can access the stored information for various purposes.</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG9} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>
                                    <div className="product-card">
                                        <div className="relative">
                                            <span className="product-number">10</span>
                                        </div>
                                        <h3 className="product-title">RFID Wrist bands</h3>
                                        <ul className="product-description">
                                            <li>  Water proof </li>
                                            <li>Can store data essential to any RFID based systems like Access control, electronic locks and Customer loyalty programs</li>
                                            <li>Available in all frequencies (LF, HF, UHF)</li>
                                        </ul>
                                        <div className="product-image">
                                            <img src={TAG10} alt="On Metal RFID Tags" />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RfidtagFaq />
            <Footer />
        </div>
    )
}

export default RFIDTags
