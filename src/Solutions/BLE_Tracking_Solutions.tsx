
import Header from '../header/header';
import Footer from '../footer/footer';
import solution_background from '../assests/Solutions_background.jpg';

import BLE1 from '../assests/solutions/BLE1.jpg';
import BLE2 from '../assests/solutions/BLE2.jpg';
import BLE3 from '../assests/solutions/BLE3.jpg';
import { Helmet } from 'react-helmet';


function BLETrackingSolutions() {

    // Solutions data
    const solutionsData = [
        {
            number: "01",
            title: "BLE Asset Tracking",
            description: "Real-time monitoring of assets such as inventory, equipment, and vehicles, improving efficiency and security."
        },
        {
            number: "02",
            title: "BLE Student Attendance System",
            description: "Automates student attendance tracking in educational institutions using BLE-enabled devices like smartphones and tablets, improving efficiency and security."
        },
        {
            number: "03",
            title: "BLE Employee Tracking",
            description: "Tracks employee movements and activities in the workplace, improving workforce management, safety, and productivity."
        },
        {
            number: "04",
            title: "Proximity Marketing",
            description: "BLE beacons enable targeted messages, promotions, and advertisements based on consumer proximity to specific locations or products."
        },
        {
            number: "05",
            title: "Customized BLE Solutions",
            description: "We offer tailored BLE solutions to meet specific client needs in industries like healthcare, retail, logistics, and smart cities, ensuring scalability and versatility."
        }
    ];

    // Products data
    const productsData = [
        {
            number: "01",
            title: "BLE Tracking Device",
            description: "Our advanced BLE tracking devices offer long battery life and reliable connectivity for various tracking applications."
        },
        {
            number: "02",
            title: "BLE Gateway System",
            description: "Centralized gateway system for collecting and processing data from multiple BLE devices across your facility."
        },
        {
            number: "03",
            title: "BLE Management Software",
            description: "Comprehensive software solution for managing and analyzing data from your BLE tracking implementation."
        }
    ];


    return (
        <div>
             <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Best BLE Proximity Marketing Solutions | Engage Customers in Real-Time"
                />
                <meta
                    name="keywords"
                    content="Best BLE Proximity Marketing"
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
            <div className="ble-solutions-content">
                <div className="image-container">
                    <img src={solution_background} alt="background" className="background-image" />
                    <h1 className="overlay-text">BLE Tracking Solutions</h1>
                </div>

                <div className="unique-whatset-product1">
                    {/* <div>
                        <h2 className="solutions-title">BLE Tracking Solutions</h2>
                    </div> */}
                    <p className="solutions-description" style={{ textAlign: "justify", padding: "10px" }}>
                        Bluetooth Low Energy (BLE), also known as
                        Bluetooth Smart, is a wireless communication
                        technology designed for short-range
                        communication with low energy consumption.
                        BLE solutions leverage this technology to provide
                        seamless connectivity for data exchange and
                        control across various applications.
                    </p>
                    <div className="rfid-image-gallery">
                        <img src={BLE1} alt='Locking Solution' />
                        <img src={BLE2} alt='Locking Solution' />
                        <img src={BLE3} alt='Locking Solution' />
                    </div>
                    <div>
                        <div className="unique-whatset-product1">
                            <div className="solutions-container">

                                {solutionsData.map((solution, index) => (
                                    <div className="solution-card" key={index}>
                                        <div className="relative">
                                            <span className="product-number">{solution.number}</span>
                                        </div>
                                        {/* <p className="solution-category">BLE Tracking Solutions</p> */}
                                        <h3 className="product-title">{solution.title}</h3>
                                        <p className="product-description">
                                            {solution.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="solutions-PRODUCTS">
                        <h3 className="products-title" style={{ color: "white" }}>COMPONENTS USED</h3>
                        <div className="solutions-container">

                            {productsData.map((product, index) => (
                                <div className="solution-card" key={index}>
                                    <div className="relative">
                                        <span className="product-number">{product.number}</span>
                                    </div>
                                    {/* <p className="solution-category">BLE Tracking Solutions</p> */}
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">
                                        {product.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BLETrackingSolutions;