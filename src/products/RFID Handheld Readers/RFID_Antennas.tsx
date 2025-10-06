import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import RFID_Antennasimage from '../../assests/products/RFID_Antennasimage.jpg'



function RFIDAntennas() {
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
                        <h1 className="overlay-text">RFID UHF Antennas</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}> UHF Antennas</h2>
                    </div>
                    <div className='about-container'>
                        <div className='text-section'>

                            <p style={{ textAlign: "justify" }} >
                                Zebra antennas features a high front-to-rear ratio, narrow side-lobe, and gain, ensuring
                                stable performance and the ability to read multiple tags accurately and quickly within a
                                moderate range. It also prioritizes high data security. Designed with a compact size, lightweight
                                structure, and low profile, it is easy to install. Additionally, its IP67 certification provides a high
                                level of protection, making it suitable for various industries, including logistics, warehousing, access
                                control, and materials management.</p>
                        </div>
                        <div className="product-images">
                            <img src={RFID_Antennasimage} alt="RFID_Antennas" />
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RFIDAntennas
