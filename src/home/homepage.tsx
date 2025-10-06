import React, { useState, useEffect } from "react";
import { Carousel, Button } from "antd";
import { MdSecurity } from "react-icons/md";
import Header from "../header/header";
import home1 from "../assests/home1.png";
import home2 from "../assests/home2.png";
import home3 from "../assests/Hospitality.png";
import home4 from "../assests/Education.png";
import home5 from "../assests/Corporate_and_Government.png";
import home6 from "../assests/Healthcare.png";
import home7 from "../assests/Retail.png";
import home8 from "../assests/Residential_Projects.png";
import Revolutionizing_Industries from "../assests/home3.png";
import CompanyLogo from "../assests/IV__logo.png";
import "./homepage.css";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";

const images = [
    {
        src: home1,
        title: "Seamless RFID Solutions for Smarter Operations",
        description: "Gain full control of your assets with our advanced RFID solutions. Track, monitor, and optimize your resources in real-time with precision and ease.",
    },
    {
        src: home2,
        title: "Smart Access Control for Enhanced Security",
        description: "Take control of your security with our advanced RFID Electronic locking systems and access control solutions. Manage, monitor, and restrict entry with real-time precision, ensuring only authorized access to your premises.",
    },
];
const data = [
    {
        src: home3,
        title: "Hospitality",
        description:
            "We specialize in revolutionizing the hospitality industry through innovative RFID solutions. we offer seamless experiences for guests and unparalleled efficiency for hotel management with RFID lock management systems, Efficient Inventory Management solutions and Streamlined Event Management systems. We are committed to pushing the boundaries of innovation in the hospitality industry. Contact us today to learn more about how our RFID solutions can elevate your hotel’s guest experience.",
    },
    {
        src: home4,
        title: "Education",
        description:
            "RFID and BLE based tracking are valuable technological innovation for educational institutions that want to improve campus security, streamline administrative functions and enhance academic performance.Efficient Campus Access Control, Automated Attendance Tracking, Asset Tracking and Management, Library Management can optimize campus operations, enhance security, and improve the overall educational experience for students and staff.",
    },
    {
        src: home5,
        title: "Corporate and Government",
        description:
            "In this modern era of digitalization, every Corporate and Government sector is switching to a technology-oriented approach. We are offering advanced RFID solutions with a wide range of features which will improve security, enhance productivity, unparalleled efficiency and accountability.We are committed to delivering comprehensive RFID solutions that address the unique challenges faced by government and corporate entities.",
    },
    {
        src: home6,
        title: "Healthcare",
        description:
            "With our advanced technology, we offer seamless integration, enhanced patient care, and optimized operational efficiency. Patient and Staff Identification, Medication Management, Patient Tracking and Workflow Optimization solutions can revolutionize your healthcare organization. Our innovative RFID solutions can address the complex challenges faced by the healthcare industry and can transform your healthcare organization, improve patient outcomes, and drive operational excellence.",
    },
    {
        src: home7,
        title: "Retail",
        description:
            "We are pioneers in transforming the retail industry through cutting-edge RFID technology. Say goodbye to manual inventory counting! Our RFID solutions automate inventory management processes, providing real-time visibility into stock levels, item locations, and movement. We are committed to empowering retailers with innovative RFID solutions that drive growth, efficiency, and customer satisfaction.",
    },
    {
        src: home8,
        title: "Residential Projects",
        description:
            "RFID locks bring unmatched convenience and modern security features to residential properties. Whether you're upgrading an existing property or developing a new one, these locks provide an elegant solution to meet both safety and convenience. Our solutions are scalable, flexible, and tailored to enhance the living experience, while offering superior control over who accesses your property.",
    },
];
const companyName = 'IV RFID SOLUTIONS ';
function Homepage() {
    const [animate, setAnimate] = useState(false);
    const letters = companyName.split('');
    useEffect(() => {
        setAnimate(true);
    }, []);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 15) {  // Change 5 to the desired final count value
                setCount(count + 2);
            } else {
                clearInterval(interval);
            }
        }, 1000);  // This will increment the counter every 1 second

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [count]);

    return (
        <div>
            <Helmet>
                <title>IV RFID Solutions - Advanced RFID & Access Control Systems</title>
                <meta
                name="description"
                content="Discover advanced RFID and access control solutions from IV RFID Solutions. We serve industries like hospitality, healthcare, retail, education, and more."
                />
                <meta
                name="keywords"
                content="Best RFID solutions in Dubai"
                />
                <meta property="og:title" content="IV RFID Solutions - RFID & Access Control Experts" />
                <meta
                property="og:description"
                content="Explore our innovative RFID-based systems and access control technologies tailored to enhance security and efficiency across multiple industries."
                />
                <meta
                property="og:image"
                content="https://example.com/meta-preview-image.jpg"
                />
            </Helmet>
            <Header />
            <Carousel autoplay>
                {images.map((item, index) => (
                    <div key={index} className="homepage-carousel-container">
                        <div
                            className="homepage-carousel-image"
                            style={{ backgroundImage: `url(${item.src})` }}
                        ></div>

                        {/* Full-Screen Overlay */}
                        <div className={`homepage-carousel-overlay ${animate ? "show" : ""}`}>
                            <p className="homepage-company-info">
                                <MdSecurity size={30} />
                                IV RFID SOLUTIONS LLC
                            </p>
                            <h1 className="homepage-carousel-title">{item.title}</h1>
                            <p className="homepage-carousel-description">{item.description}</p>
                            <Button className="homepage-about-us-button">
                                <a href="/about">  About Us</a> <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>→</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div>
                <div className="about-container">

                    <div className="text-section">
                        <h3>Revolutionizing Industries with RFID Solutions</h3>
                        <p style={{ textAlign: "justify" }}>
                            IV RFID Solutions LLC, an ISO9001 Certified Company for quality management,
                            is a leading provider of RFID-based systems, BLE solutions, Electronic locking systems
                            and access control solutions. We offer a wide range of products and services designed to meet
                            the highest security standards. With a steadfast commitment to security excellence and technological
                            innovation, we specialize in providing comprehensive RFID and access control systems tailored
                            to meet the unique needs of businesses across diverse industries.
                        </p>
                        <p style={{ textAlign: "justify" }}>As a trusted leader in the field, we are dedicated to maintaining the highest
                            standards of excellence in everything we do. Our cutting-edge technology ensures
                            the utmost safety, efficiency, and convenience for our clients. By continuously innovating
                            and adapting to industry advancements, we deliver state-of-the-art RFID and access control
                            solutions that enhance security and streamline operations for businesses worldwide.</p>
                        <br />

                    </div>

                    <div className="image-section">
                        <img src={Revolutionizing_Industries} alt="About Us" />
                        <div className="experience-counter">
                            <div className="counter-number">{count}+</div>
                            <div className="counter-text">Years Of Experience</div>
                        </div>

                        <div className="company-logo-container">
                            <div className="company-logo">
                                <img src={CompanyLogo} alt="Company Logo" />
                            </div>
                            <div className="company-name-rotate">
                                {letters.map((letter, index) => {
                                    const angle = (360 / letters.length) * index; // Distribute letters along the circle
                                    return (
                                        <span
                                            key={index}
                                            className="letter"
                                            style={{
                                                transform: `rotate(${angle}deg) translateY(-50px)`, // Adjust -40px to move letters within the logo's circle
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="our_industaries">
                <div className="unique-whatset">
                    <h4 className="unique-heading-red"> Our Industries</h4>
                    <h1 className="unique-heading-white">RFID Solutions For Your Industry</h1>
                    <div className="unique-grid-container">
                        {data.map((item, index) => (
                            <div className="unique-card" key={index}>
                                <div className="unique-image-in" style={{ backgroundImage: `url(${item.src})` }}></div>
                                <h3 className="unique-title" style={{ textAlign: "center" }}>{item.title}</h3>
                                <p className="unique-description" style={{ textAlign: "left" }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="why-choose-us">
                <h4 className="unique-heading-red">WHY CHOOSE US </h4>
                <h1 style={{ textAlign: "center" }}> We Offer Best Features For RFID Solutions</h1>
                <div className="unique-grid-container-product">

                    <div className="home-card">
                        <div className="relative">
                            <span className="number-badge">01</span>
                        </div>
                        <h3 className="product-title">Expertise</h3>
                        <p className="product-description">
                            With years of experience in the industry, our team of seasoned professionals brings unparalleled expertise and knowledge to every project
                        </p>

                    </div>

                    <div className="home-card">
                        <div className="relative">
                            <span className="number-badge">02</span>
                        </div>

                        <h3 className="product-title">Innovation </h3>
                        <p className="product-description">
                            We’re constantly pushing the boundaries of what’s possible in the world of RFID and access control systems
                        </p>

                    </div>
                    <div className="home-card">
                        <div className="relative">
                            <span className="number-badge">03</span>
                        </div>

                        <h3 className="product-title">Customer Service</h3>
                        <p className="product-description">
                            At IV-RFID, we believe that exceptional customer service is the key to success
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Homepage;
