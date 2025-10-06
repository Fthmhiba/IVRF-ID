
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import TG_H245image from '../../assests/products/LOCK3.jpg'
function TGH245() {
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
                        <h1 className="overlay-text">HOTEL LOCKS</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>TG-H245</h2>
                    </div>
                    <div>
                        <div className='about-container'>

                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className='text-section'>
                                <ul style={{
                                    textAlign: "left",  // Ensures the text inside the list items is aligned to the left
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li>	Ideal for new construction projects or when doors are being replaced</li>
                                    <li>High security and tamperproof design</li>
                                    <li>PVD lacquered finishes, with greater resistance to abrasion and corrosion</li>
                                    <li>Powered by 4AA Batteries</li>
                                    <li>ANSI 5 Latch Mortise</li>
                                    <li>Management by TRUGen Hotel Software
                                    </li>

                                </ul>
                            </div>

                            <div className="product-images">
                                <img src={TG_H245image} alt="TG_H245image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default TGH245
