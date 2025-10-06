import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Button } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import Logo from '../assests/IV__logo.png';

const Header: React.FC = () => {
    const [show, setShow] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* Desktop Navbar */}
            <Navbar collapseOnSelect expand="lg" className="fixed-top w-100 shadow-sm headerbackground" style={{ marginBottom: '10px' }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center" style={{ fontSize: '16px', fontWeight: 'bold', gap: "15px" }}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>

                            <div className="nav-item dropdown-container" onMouseEnter={() => setOpenDropdown("products")} onMouseLeave={() => setOpenDropdown(null)}>
                                <NavDropdown title="Products" id="products-dropdown" show={openDropdown === "products"}>
                                    <NavDropdown.Item href="/products/RFID_Tags">RFID Tags</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/products/RFID_UHF_Hardwares">RFID UHF Hardwares</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/products/RFID_Locks">RFID Locks</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/products/Digital_Locker_Locks">Digital Locker Locks</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/products/Digital_Safes">Digital Safes</NavDropdown.Item>

                                    <hr /> <NavDropdown.Item href="/products/RFID_Cards">RFID Cards</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/products/Access_Control_Accessories">Access Control Accessories</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <div className="nav-item dropdown-container" onMouseEnter={() => setOpenDropdown("solutions")} onMouseLeave={() => setOpenDropdown(null)}>
                                <NavDropdown title="Solutions" id="solutions-dropdown" show={openDropdown === "solutions"}>
                                    <NavDropdown.Item href="/solutions/RFID_SOLUTIONS">RFID Solutions</NavDropdown.Item>
                                    <hr /><NavDropdown.Item href="/solutions/BLE_Tracking_Solutions">BLE Tracking Solutions</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/solutions/RFID_Hotel_Locking_Solutions">RFID Hotel Locking Solutions</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS">RFID Display Case Locking Solutions</NavDropdown.Item>
                                    <hr /> <NavDropdown.Item href="/solutions/DIGITAL_LOCKING_SOLUTIONS">Digital Locking Solutions</NavDropdown.Item>
                                    <hr />  <NavDropdown.Item href="/solutions/Access_Control_Solutions">Access Control Solutions</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Button variant="danger" href="tel:+971582852600" className="ms-3 call-now-btn">Call Now</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Responsive Sidebar */}
            <Navbar className="d-lg-none fixed-top w-100 p-2 shadow-sm bg-white">
                <Container className="d-flex justify-content-between">
                    <Button variant="outline-primary" onClick={handleShow}>
                        <FaBars size={20} />
                    </Button>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-sidebar" style={{ width: "300px" }}>
                <Offcanvas.Header>
                    <Button className="close-btn" onClick={handleClose}>
                        <FaTimes size={20} />
                    </Button>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="logo" />
                    </Navbar.Brand>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="/" onClick={handleClose}>Home</Nav.Link>
                            <hr />
                            <Nav.Link href="/about" onClick={handleClose}>About Us</Nav.Link>
                            <hr />
                            <Nav.Link href="/blog" onClick={handleClose}>Blog</Nav.Link>
                            <hr />
                            <Nav.Link onClick={() => toggleDropdown("products")}>Products
                                <span className={`dropdown-toggle-icon ${openDropdown === "products" ? "open" : ""}`} style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                    {openDropdown === "products" ? "−" : "+"}
                                </span>
                            </Nav.Link>
                            {openDropdown === "products" && (
                                <div className="dropdown-content">
                                    <Nav.Link href="/products/RFID_Tags" onClick={handleClose}>RFID Tags</Nav.Link>
                                    <hr />
                                    <Nav.Link href="/products/RFID_UHF_Hardwares" onClick={handleClose}>RFID UHF Hardwares</Nav.Link>
                                    <hr />
                                    <Nav.Link href="/products/RFID_Locks" onClick={handleClose}>RFID Locks</Nav.Link>
                                    <hr /> <Nav.Link href="/products/Digital_Locker_Locks" onClick={handleClose}>Digital Locker Locks</Nav.Link>
                                    <hr />  <Nav.Link href="/products/Digital_Safes" onClick={handleClose}>Digital Safes</Nav.Link>

                                    <hr /> <Nav.Link href="/products/RFID_Cards" onClick={handleClose}>RFID Cards</Nav.Link>
                                    <hr /> <Nav.Link href="/products/Access_Control_Accessories" onClick={handleClose}>Access Control Accessories</Nav.Link>
                                </div>
                            )}
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link onClick={() => toggleDropdown("solutions")}>Solutions
                                <span className={`dropdown-toggle-icon ${openDropdown === "solutions" ? "open" : ""}`} style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                    {openDropdown === "solutions" ? "−" : "+"}
                                </span>
                            </Nav.Link>
                            {openDropdown === "solutions" && (
                                <div className="dropdown-content">
                                    <Nav.Link href="/solutions/RFID_SOLUTIONS" onClick={handleClose}> RFID Solutions </Nav.Link>
                                    <hr /> <Nav.Link href="/solutions/BLE_Tracking_Solutions" onClick={handleClose}>BLE Tracking Solutions</Nav.Link>
                                    <hr /><Nav.Link href="/solutions/RFID_Hotel_Locking_Solutions" onClick={handleClose}>RFID Hotel Locking Solutions</Nav.Link>
                                    <hr /><Nav.Link href="/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS" onClick={handleClose}>⁠RFID Display Case Locking Solutions</Nav.Link>
                                    <hr /><Nav.Link href="/solutions/DIGITAL_LOCKING_SOLUTIONS">Digital Locking Solutions</Nav.Link>
                                    <hr />
                                    <Nav.Link href="/solutions/Access_Control_Solutions" onClick={handleClose}>Access Control Solutions</Nav.Link>
                                </div>
                            )}
                            <hr />

                            <Nav.Link href="/contact" onClick={handleClose}>Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Header;
