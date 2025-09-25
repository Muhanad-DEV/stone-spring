import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
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

export default WhyChooseUs;


