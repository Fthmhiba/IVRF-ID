import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Solutions_background from '../assests/Solutions_background.jpg';
import RFID_SOLUTIONS_1 from '../assests/solutions/RFID_SOLUTIONS-1.jpeg';
import RFID_SOLUTIONS_2 from '../assests/solutions/RFID_SOLUTIONS-2.jpeg';
import RFID_SOLUTIONS_3 from '../assests/solutions/RFID_SOLUTIONS-3.jpeg';
import RFID_SOLUTIONS_4 from '../assests/solutions/RFID_SOLUTIONS-4.jpeg';
import RFID_SOLUTIONS_5 from '../assests/solutions/RFID_SOLUTIONS-5.jpeg';
import RFID_SOLUTIONS_6 from '../assests/solutions/RFID_SOLUTIONS-6.jpeg';
import RFID_SOLUTIONS_7 from '../assests/solutions/RFID_SOLUTIONS-7.jpeg';
import RFID_SOLUTIONS_8 from '../assests/solutions/RFID_SOLUTIONS-8.jpeg';
import RFID_SOLUTIONS_9 from '../assests/solutions/RFID_SOLUTIONS-9.jpeg';
import SOLUTIONS_1 from '../assests/solutions/solutions1.png';
import SOLUTIONS_2 from '../assests/solutions/solutions2.png.jpg';
import SOLUTIONS_3 from '../assests/solutions/solutions3.png.jpg';
import './solutions.css'
import { Helmet } from 'react-helmet';

// Solution data with descriptions and images
const solutionsData: any = [
    {
        id: 1,
        category: "RFID SOLUTIONS",
        title: "RFID Warehouse Management System",
        description: "Our advanced RFID warehouse tracking solution utilizes specially designed RFID tags to be placed on shelves, pallets, and entry/exit points, eliminating errors associated with manual data collection. This ensures precise, real-time inventory tracking, streamlining the supply chain for optimal operational efficiency.",
        image: RFID_SOLUTIONS_1,
        imageAlt: "RFID Warehouse Management System"
    },
    {
        id: 2,
        category: "RFID SOLUTIONS",
        title: "RFID Asset Management & Tracking Solutions",
        description: "Our solutions automatically identify and track assets equipped with RFID tags. With unique identifiers, these tags can be read without direct line-of-sight, making them a highly efficient and accurate tool for managing assets in real time, boosting operational productivity, and reducing costs.",
        image: RFID_SOLUTIONS_2,
        imageAlt: "RFID Asset Management"
    },
    {
        id: 3,
        category: "RFID SOLUTIONS",
        title: "RFID Library Management System",
        description: "Leveraging RFID technology, our system enables efficient tracking and monitoring of inventory in libraries. By streamlining inventory management, it allows libraries to easily locate misplaced items and ensures faster, more secure operations, benefiting both staff and patrons.",
        image: RFID_SOLUTIONS_3,
        imageAlt: "RFID Library Management System"
    },
    {
        id: 4,
        category: "RFID SOLUTIONS",
        title: "RFID Retail Management System",
        description: "We help retailers optimize their operations with RFID technology that provides real-time tracking of inventory, improved asset management, and enhanced visibility into the supply chain. This technology supports retailers in making informed decisions, improving customer experience, and increasing operational accuracy.",
        image: RFID_SOLUTIONS_4,
        imageAlt: "RFID Retail Management System"
    },
    {
        id: 5,
        category: "RFID SOLUTIONS",
        title: "RFID Jewelry Management System",
        description: "Our RFID-based jewelry management solutions provide businesses with an efficient way to track and secure valuable items. With advanced security features such as alarms triggered by unauthorized removal, this system helps prevent theft while improving inventory accuracy and customer service by quickly locating jewelry items.",
        image: RFID_SOLUTIONS_5,
        imageAlt: "RFID Jewelry Management System"
    },
    {
        id: 6,
        category: "RFID SOLUTIONS",
        title: "RFID Laundry Management System",
        description: "Our RFID solutions for laundry management, including linen and uniform tracking, automate sorting processes and ensure accurate inventory control. This reduces the risk of loss or misplacement, saving time and labor costs while improving operational efficiency.",
        image: RFID_SOLUTIONS_6,
        imageAlt: "RFID Laundry Management System"
    },
    {
        id: 7,
        category: "RFID SOLUTIONS",
        title: "RFID Attendance Management System",
        description: "Using RFID tags for attendance tracking, we offer a seamless solution that integrates with payroll and HR systems. This system ensures accurate attendance recording, simplifies leave management, and provides valuable insights into attendance patterns, improving overall workforce productivity.",
        image: RFID_SOLUTIONS_7,
        imageAlt: "RFID Attendance Management System"
    },
    {
        id: 8,
        category: "RFID SOLUTIONS",
        title: "RFID Baggage Tracking System",
        description: "Our RFID baggage tracking solution enhances the luggage management process at airports and transport hubs. With real-time tracking, it reduces human error, ensures timely delivery, and improves the overall passenger experience by preventing lost or misplaced baggage.",
        image: RFID_SOLUTIONS_8,
        imageAlt: "RFID Baggage Tracking System"
    },
    {
        id: 9,
        category: "RFID SOLUTIONS",
        title: "Customized RFID Solutions",
        description: "We specialize in providing tailored RFID systems to meet the unique needs of your business. Our customized solutions include applications for gaming, vehicle tracking, event management, healthcare, construction, parking, and more, designed to optimize operations and enhance security.",
        image: RFID_SOLUTIONS_9,
        imageAlt: "Customized RFID Solutions"
    }
];

function RFIDSOLUTIONS() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentSolution, setCurrentSolution] = useState<any>(null);

    // Function to open modal with specific solution details
    const openModal = (solution: any) => {
        setCurrentSolution(solution);
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="IVRFID Access & Inventory RFID Solutions"
                />
                <meta
                    name="keywords"
                    content="best RFID solutions for inventory tracking"
                />
                {/* <meta property="og:title" content="RFID UHF Hardware - IV RFID Solutions" />
                <meta
                    property="og:description"
                    content="Discover our powerful UHF RFID hardware lineup including handheld devices, fixed readers, and antennas. Ideal for robust tracking solutions."
                />
                <meta
                    property="og:image"
                    content="https://example.com/rfid-uhf-hardware.jpg"
                /> */}
            </Helmet>
            <Header />
            <div style={{ backgroundColor: "#d8d8d8de" }}>
                <br />
                <br />
                <br />
                <div>
                    <div className="image-container">
                        <img src={Solutions_background} alt="background" className="background-image" />
                        <h1 className="overlay-text">RFID SOLUTIONS</h1>
                    </div>

                    <div className="unique-whatset-solution1">
                        <div>
                            {/* <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>RFID SOLUTIONS</h2> */}
                        </div>
                        <p style={{ textAlign: "justify" }}>An RFID (Radio Frequency Identification) based management system is a technology solution
                            that uses RFID tags to track and manage assets and inventory items in real-time.
                            RFID tags are small electronic devices with unique
                            identifiers that can communicate wirelessly with RFID readers or scanners</p>
                        <p style={{ textAlign: "justify" }}>RFID solutions offer significant benefits in terms of efficiency, accuracy, and visibility
                            throughout the supply chain. They empower organizations to make data-driven decisions, reduce operational costs,
                            and enhance the overall performance of their assets and inventory management processes.</p>
                        <div className="rfid-image-gallery">
                            <img src={SOLUTIONS_1} alt='Locking Solution' />
                            <img src={SOLUTIONS_2} alt='Locking Solution' />
                            <img src={SOLUTIONS_3} alt='Locking Solution' />
                        </div>
                        <div className="unique-whatset-product1">
                            <div className="solutions-container">
                                {solutionsData.map((solution: any) => (
                                    <div key={solution.id} className="solution-card">
                                        <div className="solution-header">
                                            <span className="solution-number">{String(solution.id).padStart(2, '0')}</span>
                                            <p className="solution-category">{solution.category}</p>
                                            <h3 className="solution-title">{solution.title}</h3>
                                        </div>
                                        <button
                                            className="show-more-button"
                                            onClick={() => openModal(solution)}
                                        >
                                            Show More <span className="arrow">→</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for solution details */}
            {modalOpen && currentSolution && (
                <div className="solution-modal-overlay" onClick={closeModal}>
                    <div className="solution-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-button" onClick={closeModal}>×</button>
                        <h2>{currentSolution.title}</h2>
                        <div className="modal-content">
                            <div className="modal-image-container">
                                <img
                                    src={currentSolution.image}
                                    alt={currentSolution.imageAlt}
                                    className="modal-image"
                                />
                            </div>
                            <div className="modal-description">
                                <p>{currentSolution.description}</p>
                            </div>
                        </div>
                        <div className="modal-navigation">
                            <button
                                className="nav-button prev"
                                onClick={() => {
                                    const prevIndex = solutionsData.findIndex((s: { id: any; }) => s.id === currentSolution.id) - 1;
                                    if (prevIndex >= 0) {
                                        setCurrentSolution(solutionsData[prevIndex]);
                                    } else {
                                        setCurrentSolution(solutionsData[solutionsData.length - 1]);
                                    }
                                }}
                            >
                                ← Previous
                            </button>
                            <button
                                className="nav-button next"
                                onClick={() => {
                                    const nextIndex = solutionsData.findIndex((s: { id: any; }) => s.id === currentSolution.id) + 1;
                                    if (nextIndex < solutionsData.length) {
                                        setCurrentSolution(solutionsData[nextIndex]);
                                    } else {
                                        setCurrentSolution(solutionsData[0]);
                                    }
                                }}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default RFIDSOLUTIONS;