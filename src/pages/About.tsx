import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  useEffect(() => {
    // Set body class for about page styling
    document.body.className = 'about-page';

    return () => {
      // Cleanup body class
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side - Image */}
          <div className="about-image">
            <img src="/truck.png" alt="Stones Spring Minerals Operations" className="about-img" />
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            <div className="about-text-overlay">
              <h1 className="about-title">
                <span className="about-title-line">ABOUT</span>
                <div className="title-bar"></div>
                <span className="about-title-line">STONES SPRING MINERALS</span>
              </h1>
              
              <div className="about-paragraphs">
                <p className="about-text">
                  Stones Spring Minerals specializes in processing a wide range of minerals, with a core focus on premium calcium carbonate derived from natural limestone and marble waste. By combining advanced production technology with sustainable practices, we deliver products that meet the demands of both local and international markets.
                </p>
                
                <p className="about-text">
                  Our commitment to innovation, quality, and responsible resource management ensures we contribute to economic growth while building long-term partnerships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div style={{ 
        padding: '60px 20px',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '60px',
          justifyContent: 'center'
        }}>
          {/* Vision */}
          <div style={{ 
            flex: '1',
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              color: '#2c3e50',
              fontSize: '28px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              VISION
            </h2>
            <p style={{ 
              color: '#555',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              To lead with sustainable mineral solutions that inspire industries regionally and globally.
            </p>
          </div>

          {/* Mission */}
          <div style={{ 
            flex: '1',
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              color: '#2c3e50',
              fontSize: '28px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              MISSION
            </h2>
            <p style={{ 
              color: '#555',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              Transforming mineral resources into world-class products that create value, empower industries, and promote sustainable growth regionally and globally.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Objectives Section */}
      <div style={{ 
        backgroundImage: 'url("/vision-mission-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '32px',
            marginBottom: '50px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Strategic Objectives aligned with Oman Vision 2040:
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {/* Objective 1: Economy & Development */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#fff'
              }}>
                ECONOMY & DEVELOPMENT
              </div>
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#f0f0f0'
              }}>
                Enhance the added value of Omani mineral resources and diversify national income sources.
              </p>
            </div>

            {/* Objective 2: Sustainable Environment */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#fff'
              }}>
                SUSTAINABLE ENVIRONMENT
              </div>
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#f0f0f0'
              }}>
                Commit to industrial practices that minimize environmental impact and optimize resource usage.
              </p>
            </div>

            {/* Objective 3: People & Society */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#fff'
              }}>
                PEOPLE & SOCIETY
              </div>
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#f0f0f0'
              }}>
                Create a productive workplace that nurtures local talent and increases Omanization rates.
              </p>
            </div>

            {/* Objective 4: Governance & Excellence */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#fff'
              }}>
                GOVERNANCE & EXCELLENCE
              </div>
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#f0f0f0'
              }}>
                Adopt global quality standards and achieve high operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
