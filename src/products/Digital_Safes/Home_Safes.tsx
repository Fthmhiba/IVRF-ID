import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import Home_Safes1 from '../../assests/products/Home_Safes1.png'
import Home_Safes2 from '../../assests/products/Home_Safes2.png'
import Home_Safes3 from '../../assests/products/Home_Safes3.jpg'


function HomeSafes() {
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
                        <h1 className="overlay-text">Home Safes</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Home Safes</h2> */}
                    </div>
                    <div>
                        <div>
                            <div className="relative">
                                <span className="product-number">01</span>
                            </div>
                            <p style={{ textAlign: "justify", padding: "10px" }}>Chubbsafes’ home safes offer you basic or high burglary protection,
                                or even combined protection against theft and fire. At each security
                                grade, you can choose from a variety of sizes to meet your space and
                                capacity requirements. All our home safes are tested for durability, and
                                offer extreme resistance requirements against burglary as well as fire, firearms
                                or/and explosives. You can choose basic or high burglary resistance, according to
                                your needs and budget. However, all our products are tested to meet only the most
                                stringent accreditation standards</p>

                            {/* <p className="product-description">
                                Paired with fast 5G, Wi-Fi 6-ready connectivity, and many other top-tier features, this reader is your complete solution for unmatched performance.
                            </p> */}
                            <div className="rfid-furniture-gallery">
                                <img src={Home_Safes1} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                                <img src={Home_Safes2} alt='Home Safes' style={{ width: "300px", height: "200px" }} />
                                <img src={Home_Safes3} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default HomeSafes
