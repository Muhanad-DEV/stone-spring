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

      {/* Strategic Objectives Section */}
      <section className="strategic-objectives-section strategic-objectives--alt">
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

      {/* Why Choose Us Section */}
      <section className="choose-us-section choose-us--alt">
        <div className="choose-container">
          <h2 className="choose-title">Why Choose Us</h2>

          <ul className="choose-list">
            <li className="choose-item" data-i="1">
              <span className="choose-icon">
                <img src="/why1.png" alt="Strategic location" className="choose-icon-img"/>
              </span>
              <span className="choose-text">Strategic location with direct port access.</span>
            </li>
            <li className="choose-item" data-i="2">
              <span className="choose-icon">
                <img src="/why2.png" alt="Eco friendly" className="choose-icon-img"/>
              </span>
              <span className="choose-text">Sustainable and eco‑friendly production methods.</span>
            </li>
            <li className="choose-item" data-i="3">
              <span className="choose-icon">
                <img src="/why3.png" alt="High purity" className="choose-icon-img"/>
              </span>
              <span className="choose-text">High‑purity, precision‑engineered calcium carbonate products.</span>
            </li>
            <li className="choose-item" data-i="4">
              <span className="choose-icon">
                <img src="/why4.png" alt="Commitment to vision" className="choose-icon-img"/>
              </span>
              <span className="choose-text">Commitment to Oman Vision 2040 and national development.</span>
            </li>
            <li className="choose-item" data-i="5">
              <span className="choose-icon">
                <img src="/why5.png" alt="Trusted partner" className="choose-icon-img"/>
              </span>
              <span className="choose-text">A trusted partner for industries seeking reliability and quality.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutOman;
