import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const AboutOman: React.FC = () => {
  useEffect(() => {
    // Set body class for about page styling
    document.body.className = 'about-page';

    // Why Choose Us staggered animation
    const chooseItems = document.querySelectorAll('.choose-item');
    if (chooseItems.length > 0) {
      const chooseObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 200);
          }
        });
      }, { threshold: 0.1 });
      
      chooseItems.forEach(item => chooseObserver.observe(item));

      return () => {
        chooseItems.forEach(item => chooseObserver.unobserve(item));
        document.body.className = '';
      };
    }

    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* About Oman Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side - Image */}
          <div className="about-image">
            <img src="/aboutoman.png" alt="Oman Mining Operations - Stones Spring Minerals" className="about-img" />
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            <div className="about-text-overlay">
              <h1 className="about-title">
                <span className="about-title-line">ABOUT</span>
                <div className="title-bar"></div>
                <span className="about-title-line">OMAN: A STRATEGIC HUB</span>
              </h1>
              
              <div className="about-paragraphs">
                <p className="about-text">
                  The Sultanate of Oman is strategically located at the crossroads of Asia, Africa, and the Middle East. Rich in natural resources such as limestone, marble, gypsum, and dolomite, Oman has positioned itself as a promising hub for global trade and industrial growth.
                </p>
                
                <p className="about-text">
                  Guided by Oman Vision 2040, the nation is focused on creating a sustainable and diversified economy. Sohar Port, one of the region's fastest-growing industrial ports, provides Stones Spring Minerals with direct access to international markets, enhancing our export capabilities and global reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default AboutOman;
