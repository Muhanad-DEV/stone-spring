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

      {/* Strategic Objectives Section */}
      <section className="strategic-objectives-section strategic-objectives--alt" style={{ 
        backgroundImage: 'url("/vision-mission-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        padding: '60px 0'
      }}>
        <div className="objectives-container">
          <h2 className="objectives-title">Strategic Objectives aligned with Oman Vision 2040:</h2>
          
          <div className="objectives-grid">
            {/* Objective 1: Economy & Development */}
            <div className="objective-item">
              <div className="objective-icon">
                <img src="/Vector1.png" alt="Economy & Development icon" className="objective-icon-img"/>
              </div>
              <div className="objective-content">
                <div className="objective-bar">ECONOMY & DEVELOPMENT</div>
                <div className="objective-body">
                  <p className="objective-description">Enhance the added value of Omani mineral resources and diversify national income sources.</p>
                </div>
              </div>
            </div>

            {/* Objective 2: Sustainable Environment */}
            <div className="objective-item">
              <div className="objective-icon">
                <img src="/vector-2.png" alt="Sustainable Environment icon" className="objective-icon-img"/>
              </div>
              <div className="objective-content">
                <div className="objective-bar">SUSTAINABLE ENVIRONMENT</div>
                <div className="objective-body">
                  <p className="objective-description">Commit to industrial practices that minimize environmental impact and optimize resource usage.</p>
                </div>
              </div>
            </div>

            {/* Objective 3: People & Society */}
            <div className="objective-item">
              <div className="objective-icon">
                <img src="/vector-3.png" alt="People & Society icon" className="objective-icon-img"/>
              </div>
              <div className="objective-content">
                <div className="objective-bar">PEOPLE & SOCIETY</div>
                <div className="objective-body">
                  <p className="objective-description">Create a productive workplace that nurtures local talent and increases Omanization rates.</p>
                </div>
              </div>
            </div>

            {/* Objective 4: Governance & Excellence */}
            <div className="objective-item">
              <div className="objective-icon">
                <img src="/vector-4.png" alt="Governance & Excellence icon" className="objective-icon-img"/>
              </div>
              <div className="objective-content">
                <div className="objective-bar">GOVERNANCE & EXCELLENCE</div>
                <div className="objective-body">
                  <p className="objective-description">Adopt global quality standards and achieve high operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
