
import Header from '../../header/header'
import Footer from '../../footer/footer'
import aboutbackground from '../../assests/aboutbackground.jpeg'
import MC50image from '../../assests/products/MC50.jpg'



function MC50() {
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
                        <h1 className="overlay-text">MC50</h1>
                    </div>
                </div>
                <div className="unique-whatset-product1">
                    <div>
                        {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>MC50</h2> */}
                    </div>

                    <div className='about-container'>


                        <div className='text-section' style={{ textAlign: "justify" }}>
                            <p >
                                MC50 UHF is a 5G handheld reader integrates with Impinj E710 and supports Impinj Gen2X, it offers unparalleled UHF performance and a convenient UHF back-clip, allowing easy detachment and conversion into a lightweight mobile computer.
                            </p>
                            <p>
                                Paired with fast 5G, Wi-Fi 6-ready connectivity, and many other top-tier features, this reader is your complete solution for unmatched performance.
                            </p>
                        </div>
                        <div className="product-images">
                            <img src={MC50image} alt="MC50image" />
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MC50
