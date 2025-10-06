import React from 'react';
import './footer.css';

import call from '../assests/phone.png'
import emailicon from '../assests/email.png'
import location from '../assests/location.png'
import Logo_logo from '../assests/IV RFID LOGO-1.png'
import facebook from '../assests/facebook-new.png'
import insta from '../assests/instagram.png'
import twitter from '../assests/twitter.png'
import likiden from '../assests/linkdin.png'

const Footer: React.FC = () => {
    return (
        <>
            <footer className="iv-footer">
                <div className="footer-container">
                    <div className="contact-info-row">
                        <div className="contact-info-item">

                        </div>
                        <div className="contact-info-item">

                        </div>
                        <div className="contact-info-item">

                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="product-links">

                            <ul>
                                <img src={Logo_logo} alt="logo" style={{ width: "100px", height: "100px" }} />
                                <br />
                                <br />
                                <li><a href="#">  <img src={facebook} alt="logo" style={{ width: "30px", height: "30px" }} />
                                </a> <a href="https://www.linkedin.com/company/iv-rfid-solutions-llc/">
                                        <img src={likiden} alt="logo" style={{ width: "30px", height: "30px" }} />
                                    </a> <a href="https://www.instagram.com/iv_rfid_solutions_llc?igsh=MWlweWFrd2Rib2t1bA==">  <img src={insta} alt="logo" style={{ width: "35px", height: "35px" }} />
                                    </a>
                                    <a href="#">  <img src={twitter} alt="logo" style={{ width: "35px", height: "35px" }} />
                                    </a></li>
                            </ul>
                        </div>


                        <div className="product-links">
                            <h4> Products</h4>
                            <ul style={{ fontSize: "13px" }}>
                                <li><a href="/products/RFID_Tags">RFID Tags</a></li>
                                <li><a href="/products/RFID_UHF_Hardwares">RFID UHF Hardwares</a></li>
                                <li><a href="/products/RFID_Locks">RFID Locks</a></li>
                                <li><a href="/products/Digital_Locker_Locks">Digital Locker Locks</a></li>
                                <li><a href="/products/Digital_Safes">Digital Safes</a></li>

                                <li><a href="/products/RFID_Cards">RFID Cards</a></li>
                                <li><a href="/products/Access_Control_Accessories">Access Control Accessories</a></li>
                            </ul>
                        </div>
                        <div className="product-links">
                            <h4> Solutions</h4>
                            <ul style={{ fontSize: "13px" }}>
                                <li><a href="/solutions/RFID_SOLUTIONS"> RFID Solutions</a></li>
                                <li><a href="/solutions/BLE_Tracking_Solutions">BLE Tracking Solutions</a></li>
                                <li><a href="/solutions/RFID_Hotel_Locking_Solutions">RFID Hotel Locking Solutions</a></li>
                                <li><a href="/solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS">⁠RFID Display Case Locking Solutions</a></li>
                                <li><a href="/solutions/DIGITAL_LOCKING_SOLUTIONS">Digital Locking Solutions</a></li>
                                <li><a href="/solutions/Access_Control_Solutions">Access Control Solutions</a></li>
                            </ul>
                        </div>
                        <div className="product-links">
                            <ul>
                                <li><a href="#">
                                    <img src={location} alt='location icon' style={{ width: "30px", height: "30px" }} />
                                    <span>Office# 607, Al Saoud building, AI Qusais 4, Dubai, UAE</span></a></li>
                                <br />
                                <li className="call-info">
                                    <img src={call} alt="Call Icon" style={{ width: "30px", height: "30px" }} />
                                    <div className="call-details">
                                        Call us:  <a href="tel:+97142696279">
                                            <span>    +971 42 696 279</span>
                                        </a>
                                        <br />
                                        <a href="tel:+971582852600">
                                            <span> +971 58 285 2600</span>
                                        </a>


                                    </div>
                                </li>

                                <br />
                                <li><a href="mailto:sales@iv-rfid.com">
                                    <img src={emailicon} alt='email icon' style={{ width: "25px", height: "25px" }} />
                                    Email us:
                                    <span> sales@iv-rfid.com</span></a></li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div>
                    <hr />
                    © 2025 IV RFID Solutions. All rights reserved.
                </div>
            </footer>


            <div className="whatsapp-chat-fixed">
                <a
                    href="https://wa.me/+971582852600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-support"
                >

                    <span>Need Help? Chat with us</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12.52 2.02C6.74 2.02 2.08 6.68 2.08 12.46c0 1.84.48 3.64 1.4 5.22L2 22l4.4-1.4c1.52.86 3.24 1.32 4.96 1.32 5.78 0 10.44-4.66 10.44-10.44C22.8 6.68 18.3 2.02 12.52 2.02zm5.44 14.46c-.24.66-1.16 1.24-1.88 1.4-.5.1-1.16.16-1.88-.18-1.52-.62-3.08-2-4.16-3.54a6.86 6.86 0 0 1-1.32-2.58c-.16-.72.08-1.4.48-1.88.24-.28.62-.48 1-.48h.44c.24 0 .48.18.62.44.24.52.48 1.04.72 1.52.16.28.08.62-.16.82l-.58.58c-.28.28-.28.72 0 1a8.32 8.32 0 0 0 2.58 1.96c.4.24.78.16 1.04-.18l.58-.72c.18-.24.58-.32.86-.16.52.24 1.04.48 1.56.72.28.16.44.4.44.68v.44c0 .4-.18.78-.44 1z" />
                    </svg>
                </a>
            </div>
        </>
    );
};

export default Footer;