import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import Hotel_Safes1 from '../../assests/products/Hotel_Safes1.png'



function HotelSafes() {
    return (
        <div>
            <Header />
            <div>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background" className="background-image" />
                        <h1 className="overlay-text">Hotel Safes</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Hotel Safes</h2> */}
                    </div>
                    <div>
                        <div className='about-container'>
                            <div className='text-section'>
                                <p style={{ textAlign: "justify" }}>The Chubbsafes Air Hotel is a compact safe providing elementary burglary protection for hotel environments, student accommodation or other locations with frequent occupancy turnover.
                                    Protect your hotel, student residency or other high-turnover accommodation against theft: Chubbsafes’ hotel security boxes are ideal for storing your customers’ cash, valuables, passports and other sensitive documents. Customers and residents at hotels, dormitories and other high-turnover accommodations increasingly expect to have access to convenient, private and secure storage facilities in which their valuables, passports and other important documents can be protected from theft or loss.
                                    .</p>

                            </div>

                            <div >
                                <img src={Hotel_Safes1} alt='Hotel Safes' />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default HotelSafes
