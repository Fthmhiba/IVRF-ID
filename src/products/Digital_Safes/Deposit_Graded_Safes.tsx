import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import Deposit_Graded_Safes1 from '../../assests/products/Deposit_Graded_Safes1.png'
import Deposit_Graded_Safes2 from '../../assests/products/Deposit_Graded_Safes2.png'
import Deposit_Graded_Safes3 from '../../assests/products/Deposit_Graded_Safes3.png'
import Deposit_Graded_Safes4 from '../../assests/products/Deposit_Graded_Safes4.png'


function DepositGradedSafes() {
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
                        <h1 className="overlay-text">Deposit & Graded Safes</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>Deposit & Graded Safes</h2> */}
                    </div>
                    <div>
                        <div>
                            <div className="relative">
                                <span className="product-number">01</span>
                            </div>
                            <p style={{ textAlign: "justify", padding: "10px" }}>Chubb safes’ deposit safes offer a variety of simple and compact units for
                                under-the-counter use at tills or in offices, ensuring the best in burglary protection
                                for your on-site cash. All our safes offer a high-security solution to meet the needs and
                                requirements for the security that our customers may have. The deposit safes are designed to
                                resist fishing attempt and to provide a
                                secure deposit facility without the need to open the safe door.</p>

                            <p style={{ textAlign: "justify", padding: "10px" }}>
                                For both home and office buildings, discover our range of graded safes. The safes features high-strength lock mechanisms that perform
                                reliably time after time, guaranteeing you a high level of protection.
                            </p>
                            <p style={{ textAlign: "justify", padding: "10px" }}>
                                For the insurance industry, certification is a reliable and objective basis for risk calculation. For you, it offers greater peace of mind in your investment decisions. Against burglary,
                                fire or any other threat, you need the right protection for the identified risks
                            </p>
                            <div className="rfid-furniture-gallery">
                                <img src={Deposit_Graded_Safes1} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                                <img src={Deposit_Graded_Safes2} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                                <img src={Deposit_Graded_Safes3} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                                <img src={Deposit_Graded_Safes4} alt='Home Safes' style={{ width: "200px", height: "200px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default DepositGradedSafes
