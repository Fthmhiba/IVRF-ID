import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import RFID_Fixed_Readersimage from '../../assests/products/RFID_Fixed_Readers.png'



function RFIDFixedReaders() {
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
                        <h1 className="overlay-text">RFID Fixed Readers</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Zebra FX9600</h2>
                    </div>
                    <div className='about-container'>
                        <div className='text-section'>

                            <p style={{ textAlign: "justify" }} >
                                The Zebra Fixed UHF RFID Readers delivers the performance and features you need to handle it all.
                                With support for Power over Ethernet, IP53 sealing and up to eight RF ports, the FX9600 brings a
                                new level of cost efficiency to passive UHF asset tracking and inventory management, without compromising
                                on performance. Industry-leading read rates, long read ranges and exceptional RF sensitivity ensure you can
                                automate inventory management —
                                from receiving and put away to picking and shipping — without errors and without bottlenecks.
                            </p>
                            <p style={{ textAlign: "justify" }} >
                                Increased efficiency and accuracy every time your inventory is touched, reduced labor costs
                                and the delivery of the right product to the right customer, on time, every time.
                                When you need industry-best RFID performance, the Zebra FX9600, FX7600, FXR90 delivers
                            </p>
                        </div>

                        <div className="product-images">
                            <img src={RFID_Fixed_Readersimage} alt="RFID_Fixed_Readersimage" />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RFIDFixedReaders
