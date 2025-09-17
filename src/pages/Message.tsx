import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Message: React.FC = () => {
  useEffect(() => {
    // Set body class for message page styling
    document.body.className = 'message-page';

    // Vision & Mission scroll animation
    const visionSection = document.querySelector('.vision-mission-section');
    if (visionSection) {
      const visionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.2 });
      
      visionObserver.observe(visionSection);

      return () => {
        visionObserver.unobserve(visionSection);
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
      
      {/* Message Section */}
      <section className="message-section">
        <div className="message-container">
          {/* Left Side - Content */}
          <div className="message-content">
            <div className="message-text-overlay">
              <h1 className="message-title">
                <div className="title-accent"></div>
                <span className="message-title-line">MESSAGE FROM</span>
                <span className="message-title-line">THE BOARD OF DIRECTORS</span>
              </h1>
              
              <div className="message-paragraphs">
                <p className="message-text">
                  At Stones Spring Minerals, we are proud to contribute to Oman's economic diversification and sustainable growth. Our mission is to transform mineral resources into world-class products that create value, empower industries, and support development regionally and globally.
                </p>
                
                <p className="message-text">
                  Located in the Sohar Industrial Area (Madayn), near Sohar Port and major mineral reserves, we combine advanced technology with responsible practices to deliver reliable, high-quality solutions for diverse markets. Looking ahead, our ambition is not only to grow as a company but also to play a leading role in shaping a resilient industrial future, one that reflects Oman's potential and extends its impact globally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="message-image">
            <img src="/message.png" alt="Stones Spring Minerals Operations" className="message-img" />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <div className="vision-mission-content">
            {/* Vision */}
            <div className="vision-block">
              <h2 className="vision-title">
                <div className="title-marker"></div>
                VISION
              </h2>
              <p className="vision-text">
                To lead with sustainable mineral solutions that inspire industries regionally and globally.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-block">
              <h2 className="mission-title">
                <div className="title-marker"></div>
                MISSION
              </h2>
              <p className="mission-text">
                Transforming mineral resources into world-class products that create value, empower industries, and promote sustainable growth regionally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
