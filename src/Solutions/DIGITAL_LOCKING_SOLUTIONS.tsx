import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import Solution_background from '../assests/Solutions_background.jpg'
import SolityImage1 from '../assests/solutions/SOLITY_LEVER_LOCK.jpeg'
import SolityImage2 from '../assests/solutions/SOLITY_PUSH_PULL_LOCK.jpeg'
import SolityImage3 from '../assests/solutions/SOLITY_RIM_LOCK.jpeg'
function DIGITALLOCKINGSOLUTIONS() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <br />
          <br />
          <br />
          <div>
            <div className="image-container">
              <img src={Solution_background} alt="background" className="background-image" />
              <h1 className="overlay-text">DIGITAL LOCKING SOLUTIONS</h1>
            </div>

            <div className="unique-whatset-product1">


              <div>
                {/* <div className="rfid-image-gallery">
                                <img src={BLE_Tracking_Solutions1} alt='Locking Solution' />
                                <img src={BLE_Tracking_Solutions2} alt='Locking Solution' />
                                <img src={BLE_Tracking_Solutions3} alt='Locking Solution' />
                            </div> */}
                <div className="unique-whatset-product1">
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '40px 20px',
                    margin: '20px auto',

                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(0,0,0,0.08)',
                    border: '1px solid #e0e0e0'
                  }}>
                    <div>

                      <h2 style={{ color: "rgb(0, 0, 110)", textAlign: "center" }}>IV RFID – Proud Distributor and Partner of SOLITY KOREA</h2>
                    </div>
                    <h2 style={{
                      textAlign: 'center',
                      fontSize: '30px',
                      color: 'rgb(0, 0, 110)',
                      marginBottom: '20px'
                    }}>
                      BRAND:   SOLITY (Made in Korea)
                    </h2>

                    <p style={{
                      textAlign: 'justify',
                      color: '#333',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      SOLITY from KOREA is a leading smart lock brand with extensive global reach. Benefiting from decades of expertise since its roots in key manufacturing (1980) and digital lock development, SOLITY operates a robust R&D center with over 50 patents and more than 30% of staff dedicated to innovation.
                    </p>

                    <ul style={{
                      listStyle: 'disc',
                      paddingLeft: '20px',
                      color: '#444',
                      fontSize: '16px',
                      lineHeight: '1.8',
                      marginBottom: '20px',
                      textAlign: "left"
                    }}>
                      <li><strong>Global presence:</strong> Present in 21 countries, with strategic factories in Korea and Vietnam, automated assembly lines, and annual output up to 800k units.</li>
                      <li><strong>Next-gen technology:</strong> Energy-efficient motors, modular IoT systems, and Matter compatibility for future-ready smart access.</li>
                      <li><strong>Premium functionality:</strong> Facial recognition, smart alarms, and mobile proximity unlocking features surpass standard smart locks.</li>
                      <li><strong>Trusted brand pedigree:</strong> Backed by a legacy of Korean smart lock excellence and strong supply chain partnerships.</li>
                      <li><strong>Quality assurance:</strong> Certified with ISO 9001/14001, KS, and over 56 quality tests, with 24/7 support network.</li>
                      <li>

                        <span style={{
                          color: '#0d47a1',
                          backgroundColor: '#e3f2fd',
                          padding: '4px 6px',
                          borderRadius: '6px',
                          display: 'inline-block',
                          marginTop: '4px'
                        }}>
                          <strong>Fire Safety Standards:</strong>
                          Solity fire-rated locks are tested and certified to meet standards like BS EN 1634-1 or equivalent fire resistance standards.
                        </span>
                      </li>
                    </ul>

                    <p style={{
                      textAlign: 'justify',
                      color: '#333',
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}>
                      SOLITY smart locks blend refined Korean craftsmanship with sophisticated smart features—from biometric authentication and Matter-enabled connectivity to industrial-grade safety and flexible access controls. Ideal for forward-thinking enterprises, smart buildings, and hospitality venues, SOLITY delivers unmatched security, convenience, and integration capabilities.
                    </p>


                  </div>

                  <div className="unique-whatset-product1">
                    <h2>Key Products</h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      marginTop: '30px'
                    }}>
                      {/* LEVER LOCK */}
                      <div style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center'
                      }}>
                        <div style={{ marginBottom: '10px' }}>
                          <span style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#0d47a1'
                          }}>01</span>
                        </div>
                        <h3 style={{
                          fontSize: '20px',
                          margin: '10px 0',
                          color: '#333'
                        }}>LEVER LOCK</h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#555',
                          marginBottom: '15px',
                          textAlign: 'justify'
                        }}>
                          The Solity smart lever lock brings together contemporary design and comprehensive access control. With PIN, RFID, fingerprint, BLE, Wi-Fi and mechanical backup, plus advanced safety features like auto-locking, fire resistance, and alarm systems, it’s a premium choice seeking reliable, stylish, and intelligent door security.                        </p>
                        <img
                          src={SolityImage1}
                          alt="Solity Product 1"
                          style={{
                            width: '100%',
                            // maxHeight: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginTop: '10px'
                          }}
                        />
                      </div>

                      {/* PUSH PULL LOCK */}
                      <div style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center'
                      }}>
                        <div style={{ marginBottom: '10px' }}>
                          <span style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#0d47a1'
                          }}>02</span>
                        </div>
                        <h3 style={{
                          fontSize: '20px',
                          margin: '10px 0',
                          color: '#333'
                        }}>PUSH PULL LOCK</h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#555',
                          marginBottom: '15px',
                          textAlign: 'justify'
                        }}>
                          Solity Push-Pull Smart Lock is a premium digital locking solution that combines sophisticated design with cutting-edge smart technology. Designed for effortless entry and enhanced security, this lock uses an innovative push-pull handle mechanism that allows users to open the door with a simple push or pull—ideal for high-traffic environments and modern spaces.                        </p>
                        <img
                          src={SolityImage2}
                          alt="Solity Product 2"
                          style={{
                            width: '100%',
                            // maxHeight: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginTop: '10px'
                          }}
                        />
                      </div>

                      {/* RIM LOCK */}
                      <div style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center'
                      }}>
                        <div style={{ marginBottom: '10px' }}>
                          <span style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#0d47a1'
                          }}>03</span>
                        </div>
                        <h3 style={{
                          fontSize: '20px',
                          margin: '10px 0',
                          color: '#333'
                        }}>RIM LOCK</h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#555',
                          marginBottom: '15px',
                          textAlign: 'justify'
                        }}>
                          The Solity Smart Rim Lock is a sleek, surface-mounted digital lock that transforms ordinary doors into high-tech secure access points. Engineered in Korea with meticulous craftsmanship, this rim lock delivers enterprise-grade security while offering installation flexibility suited for gates, interior doors, and retrofit projects                        </p>
                        <img
                          src={SolityImage3}
                          alt="Solity Product 3"
                          style={{
                            width: '100%',
                            // maxHeight: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginTop: '10px'
                          }}
                        />
                      </div>
                    </div>

                  </div>


                </div>


              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DIGITALLOCKINGSOLUTIONS
