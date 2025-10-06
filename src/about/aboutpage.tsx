import './aboutpage.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import aboutus from '../assests/aboutus.png'

import { Card } from 'antd'
import Visibility from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag"; // Rename to avoid conflicts
import { Helmet } from 'react-helmet'

function Aboutpage() {

    const data = [
        {
            title: "Innovative Solutions",
            description:
                "We leverage the latest RFID technology to provide smart and scalable solutions.",
        },
        {
            title: "Cutting-Edge Technology",
            description:
                "Our solutions incorporate state-of-the-art technology for enhanced efficiency.",
        },
        {
            title: "Reliable Performance",
            description:
                "Designed for accuracy and reliability, ensuring seamless business operations.",
        },
        {
            title: "Seamless Integration",
            description:
                "Easy-to-implement solutions that integrate smoothly with your existing systems.",
        },
        {
            title: "Enhanced Security",
            description:
                "We prioritize data security and protection, giving you peace of mind.",
        },
        {
            title: "Customer-Centric Approach",
            description:
                "Our focus is on delivering value and exceptional service to our customers.",
        },
    ];

    return (
        <div className='aboutpagefull'>

                <Helmet>
                    <title>About Us - Iv RFID Solutions</title>
                    <meta 
                    name="description" 
                    content="RFID Experts & Hardware in Dubai | RFID Consultants" 
                    />
                    <meta 
                    name="keywords" 
                    content="RFID experts and consultants" 
                    />
                    {/* <meta property="og:title" content="About Iv RFID Solutions" />
                    <meta 
                    property="og:description" 
                    content="Learn more about our innovative RFID solutions and how we can help optimize your business operations." 
                    />
                    <meta 
                    property="og:image" 
                    content="https://example.com/about-image.jpg" 
                    /> */}
                </Helmet>

            <Header />
            <div>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={aboutbackground} alt="background" className="background-image" />
                        <h1 className="overlay-text">ABOUT US</h1>
                    </div>
                    <div className="about-container">

                        <div className="text-section" style={{ textAlign: "justify" }}>
                            {/* <h3>About Us</h3> */}
                            <p>
                                IV RFID Solutions, we are at the forefront of revolutionizing industries
                                through cutting-edge RFID technology. With a commitment to innovation and
                                excellence, we specialize in providing comprehensive RFID solutions that empower
                                businesses to enhance efficiency, security, and connectivity. We specialize in
                                providing the most innovative, reliable, and latest technologies in RFID-based
                                security systems.
                                Our objective is to provide quality solutions and execution works for our clients in a
                                cost-effective manner, which best serves individual needs and requirements.
                                We bring together a team of seasoned professionals with deep expertise in RFID
                                technology and access control systems. Leveraging years of industry experience
                                and a passion for delivering exceptional solutions, we pride ourselves on being at
                                the forefront of security innovation.
                                <p style={{ textAlign: "justify" }}> IV RFID, an ISO9001 Certified Company for quality management are dedicated
                                    to maintaining the highest standards of excellence in ever thing we do. This
                                    commitment is reflected in our ISO certification, a recognition that signifies our
                                    adherence to internationally recognized quality management and operational
                                    excellence standards.</p>

                            </p>
                            <br />
                            <div>

                                <div className="call-button">
                                    <div>
                                        <a href="/products/RFID_Tags" className="discover-button">Discover More →</a>
                                    </div>
                                    {/* <div className="call-info">
                                        <img src={call} className="call-button-icon" alt="Call Icon" />
                                        <div> <p className="call-text" style={{ color: "red" }}>Call Us 24/7</p>
                                            <a href="tel:+971502852500" className="call-number">+971 50 285 2500</a></div>

                                    </div> */}
                                </div>

                            </div>

                        </div>


                        <div className="image-section">
                            <img src={aboutus} alt="About Us" />
                        </div>
                    </div>
                    <div className="about-cards-container">
                        <Card className="about-card">
                            <Visibility className="about-icon vision-icon" style={{
                                width: "200px",
                                height: "70px"
                            }} />
                            <h3>Our Vision</h3>
                            <p style={{ textAlign: "justify" }}>
                                Empowering businesses through seamless and intelligent RFID solutions to create
                                a connected and secure world. Our vision is to be a leading provider delivering
                                innovative solutions that exceed our customers' expectations and contribute to
                                their success. We aim to continuously push the boundaries of excellence, ensuring
                                sustainable growth, unmatched quality, and exceptional service
                            </p>
                        </Card>

                        <Card className="about-card">
                            <FlagIcon className="about-icon mission-icon" style={{
                                width: "200px",
                                height: "70px"
                            }} />
                            <h3>Our Mission</h3>
                            <p style={{ textAlign: "justify" }}>
                                Delivering world-class, cost-effective solutions through long-term, strategic
                                partnerships. We are committed to creating innovative solutions, fostering strong
                                relationships, and upholding the highest standards of quality and integrity in
                                everything we do.
                            </p>
                        </Card>
                    </div>
                    <div>
                        <div className="unique-whatset">
                            <h4 className="unique-heading-red">Why Iv Rfid Solutions</h4>
                            <h1 className="unique-heading-white">What Sets Us Apart</h1>
                            <div className="unique-grid-container">
                                {data.map((item, index) => (
                                    <div className="unique-card" key={index}>
                                        <div className="unique-number">{`0${index + 1}`}</div>
                                        <h3 className="unique-title">{item.title}</h3>
                                        <p className="unique-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Aboutpage
