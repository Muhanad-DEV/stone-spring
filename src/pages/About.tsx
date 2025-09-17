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
    </>
  );
};

export default About;
