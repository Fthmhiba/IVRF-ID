import './contactpage.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import aboutbackground from '../assests/aboutbackground.jpeg'
import call from '../assests/phone_icon.png'
import emailicon from '../assests/email.png'
import location from '../assests/location_icon.png'
import { Button, Card, Form, Input } from 'antd'
import { Helmet } from 'react-helmet'
function Contactus() {
    const [form] = Form.useForm();
    const onFinish = async (values: any) => {
        console.log("Form values:", values);

        try {
            const response = await fetch("https://formspree.io/f/mzzejkrg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                alert("Your message has been sent successfully!");
                form.resetFields(); // Reset form fields after submission
            } else {
                const errorData = await response.json();
                alert(`Submission failed: ${errorData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error with your submission. Please try again.");
        }
    };


    return (
        <div>
            <Helmet>
                <title>RFID UHF Hardware - Readers & Antennas | IV RFID Solutions</title>
                <meta
                    name="description"
                    content="Security Solutions Support in Dubai | Expert Safety & Access Services"
                />
                <meta
                    name="keywords"
                    content="Security Solutions Support Dubai"
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
            <br />
            <br />
            <br />

            <div>
                <div className="image-container">
                    <img src={aboutbackground} alt="background" className="background-image" />
                    <h1 className="overlay-text">Contact US</h1>
                </div>
                <div>
                    <div className="unique-whatset-contact">
                        <h4 className="unique-heading-red">Get in Touch</h4>
                        <h1 className="unique-heading" style={{ color: "rgb(0, 0, 110)" }}>Our Contact Information</h1>
                        <div className="unique-grid-container">

                            <div className="unique-card-address">
                                <div className="unique-number">  <img src={location} alt='location icon' style={{ width: "30px", height: "30px" }} /></div>
                                <h3 className="unique-title">Our Address</h3>
                                <p className="unique-description">Office# 607, Al Saoud building, AI Qusais 4, Dubai, UAE</p>
                            </div>
                            <div className="unique-card-address">
                                <div className="unique-number">  <img src={call} alt='location icon' style={{ width: "30px", height: "30px" }} /></div>
                                <h3 className="unique-title">Phone Number</h3>
                                <p className="unique-description"><a href="tel:+971 42696279" style={{ textDecoration: "none", color: "black" }}>+971 42696279</a>
                                </p>
                                <p className="unique-description"><a href="tel:+971582852600" style={{ textDecoration: "none", color: "black" }}>+971 58 285 2600</a>
                                </p>
                            </div>
                            <div className="unique-card-address">
                                <div className="unique-number">  <img src={emailicon} alt='location icon' style={{ width: "30px", height: "30px" }} /></div>
                                <h3 className="unique-title">Email Address</h3>
                                <p className="unique-description"><a href="mailto:sales@iv-rfid.com" style={{ textDecoration: "none", color: "black" }}>sales@iv-rfid.com</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="unique-grid-container-contact">
                    <Card className="unique-card-contact">
                        <h3 style={{ textAlign: "center" }}>Get A Quote</h3>
                        <hr />
                        <Form form={form} layout="vertical" onFinish={onFinish} className="contact-form">
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please enter your name" }]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[
                                    { required: true, message: "Please enter your phone number" },

                                ]}
                            >
                                <Input placeholder="Enter your phone number" />
                            </Form.Item>

                            <Form.Item
                                label="Subject"
                                name="subject"
                                rules={[{ required: true, message: "Please enter a subject" }]}
                            >
                                <Input placeholder="Enter subject" />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[{ required: true, message: "Please enter your message" }]}
                            >
                                <Input.TextArea rows={4} placeholder="Enter your message" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="submit-btn">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    <div className="unique-card-contact">
                        <iframe
                            title="Google Map"
                            className="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462711.98320114697!2d55.3964393!3d25.2915042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d331896f22f%3A0xc8c888b309cd2161!2sIV%20RFID%20Solutions%20LLC!5e0!3m2!1sen!2sae!4v1622209367143!5m2!1sen!2sae"
                            width="100%"
                            height="650"
                            style={{ border: 0 }}

                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactus
