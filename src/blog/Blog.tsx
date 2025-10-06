import './blogpage.css';
import aboutbackground from '../assests/aboutbackground.jpeg';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Card } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';  // Import Link for navigation

import blogimg from '../assests/blog/blogimg.jpeg';
import bestrfid from '../assests/blog/bestrfid.jpeg';
import enhance from '../assests/blog/enhance.jpeg';
import digitalLocker from '../assests/blog/digitalLocker.jpg';
import mobile_payment from '../assests/blog/mobile_payment.jpg';
import blog6 from '../assests/blog/blog6.jpg';
import blog7 from '../assests/blog/blog7.jpg'
import blog8 from '../assests/blog/blog8.jpg'
import blog9 from '../assests/blog/blog9.jpg'
import blog10 from '../assests/blog/blog10.jpg'
import blog11 from '../assests/blog/blog11.jpg'
import blog12 from '../assests/blog/blog12.jpg'
import blog13 from '../assests/blog/blog13.jpg'






function Blog() {
  const blogData = [
    {
      id: '1',
      title: "Unlock Efficiency with the Best RFID Solutions in Dubai – IV RFID SOLUTIONS LLC",
      description: "In today's fast-paced business world, the demand for efficient tracking, asset management, and inventory control solutions...",
      image: blogimg, 
      link: "/blog/1",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '2',
      title:"Best RFID Solutions in Dubai with IV RFID SOLUTIONS LLC",
      image: bestrfid, 
      description: "In today’s fast-paced business environment, Radio Frequency Identification (RFID) technology has become essential..",
      link: "/blog/2",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '3',
      title: "Enhance Your Business with RFID Experts and Consultants from IV RFID Solutions",
      image: enhance, 
      description: "In today’s fast-paced digital economy, businesses across various industries are rapidly adopting RFID...",
      link: "/blog/3",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '4',
      title: "Digital Locker Locks – The Future of Secure Storage",
      image: digitalLocker, 
      description: "In an era where technology is reshaping every aspect of our lives, traditional locks are making way for advanced...",
      link: "/blog/4",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '5',
      title: "Unlock the Future with the Best RFID Solutions in Dubai – Powered by IV RFID SOLUTIONS",
      image: mobile_payment, 
      description: "In an era driven by automation and real-time data, businesses in Dubai are turning to RFID...",
      link: "/blog/5",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '6',
      title: "Secure Your World with Digital Locks from IV RFID SOLUTIONS LLC",
      image: blog6, 
      description: "In today’s world, digital locks have revolutionized the way we protect our homes, offices, and assets. Offering a perfect...",
      link: "/blog/6",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '7',
      title: "Enhance Security & Safety with Fire Rated Smart Locks from IV RFID SOLUTIONS LLC",
      image: blog7, 
      description: "In today’s safety-conscious world, ensuring secure access control isn’t just about convenience—it’s about protection. IV RFID...",
      link: "/blog/7",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '8',
      title: "RFID Cards in Dubai – Secure, Smart, and Efficient Solutions with IV RFID Solutions LLC",
      image: blog8, 
      description: "In today’s fast-paced world, businesses and organizations in Dubai are constantly seeking advanced solutions for security, access...",
      link: "/blog/8",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '9',
      title: "RFID Tags in UAE — Streamlining Operations with IV RFID SOLUTIONS LLC",
      image: blog9, 
      description: "In a fast-growing market like the UAE, industries are constantly looking for ways to improve efficiency, security, and automation. From...",
      link: "/blog/9",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '10',
      title: "RFID Cards in Dubai with IV RFID SOLUTIONS LLC: Enhancing Security and Efficiency Across Industries",
      image: blog10, 
      description: "In today’s fast-paced digital world, RFID technology is transforming how businesses operate — especially in a technologically forward ...",
      link: "/blog/10",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '11',
      title: "Transforming Businesses with RFID Solutions in UAE – IV RFID Solutions LLC",
      image: blog11, 
      description: "In the rapidly evolving digital landscape of today, companies in the UAE are progressively embracing smart technologies to enhance efficiency, security, and customer...",
      link: "/blog/11",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '12',
      title: "Enhance Safety with Fire Rated Smart Locks – Discover IV RFID SOLUTIONS LLC",
      image: blog12, 
      description: "In our fast-paced world, safety and security have never been more crucial. Whether you're looking to protect homes, offices, or industrial sites, picking the...",
      link: "/blog/12",  // Set the dynamic link to BlogDetailsPage
    },
    {
      id: '13',
      title: "RFID Tags in UAE – Transforming Businesses with IV RFID Solutions LLC",
      image: blog13, 
      description: "In today’s fast-paced world, businesses in the UAE are increasingly turning to smart technologies to improve efficiency, accuracy, and security. One of the most impactful...",
      link: "/blog/13",  // Set the dynamic link to BlogDetailsPage
    },
  ];

  return (
    <div className='blogpage'>
      {/* Helmet to set meta title and tags dynamically */}
      <Helmet>
        <title>Blog - Iv RFID Solutions</title>
        <meta name="description" content="Read the latest blogs and insights on RFID technology, security, and asset tracking." />
        <meta name="keywords" content="RFID, asset tracking, security, technology, innovations" />
        <meta property="og:title" content="Blog - Iv RFID Solutions" />
        <meta property="og:description" content="Explore the latest blog posts on RFID technology, asset tracking, and security." />
      </Helmet>

      <Header />

      <div className="image-containerss">
        <img
          src={aboutbackground}
          alt="background image"
          className="background-image"
        />
        <h1 className="overlay-text">Blogs</h1>
      </div>

      <div className="blog-container">
        <h1 className="blog-title">Our Blogs</h1>
        <div className="blog-list">
          {blogData.map((item, index) => (
            <Card key={index} className="blog-card">
              <img src={item.image} alt={item.title} className="blog-image" />  {/* Display the image */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link} className="read-more">Read More →</Link> 
            </Card>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
