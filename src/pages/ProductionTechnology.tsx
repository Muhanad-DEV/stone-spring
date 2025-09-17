import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const ProductionTechnology: React.FC = () => {
  useEffect(() => {
    // Set body class for tech page styling
    document.body.className = 'tech-page';

    return () => {
      // Cleanup body class
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero / Intro */}
      <section className="tech-hero">
        <div className="tech-container">
          <h1 className="tech-title"><span>PRODUCTION TECHNOLOGY</span></h1>
          <p className="tech-lead">
            Our production line is equipped with advanced crushing and ultra‑fine grinding systems that
            transform raw mineral resources into precision‑engineered products of unmatched purity. Each stage of
            the process is monitored to ensure that every grain meets global quality benchmarks.
          </p>
        </div>
      </section>

      {/* Split section: Trade & Export Advantages */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side - Content */}
          <div className="about-content">
            <div className="about-text-overlay">
              <h2 className="about-title">
                <span className="about-title-line">TRADE & EXPORT ADVANTAGES</span>
                <div className="title-bar"></div>
              </h2>
              <p className="about-text">
                Situated near Sohar Port, Stones Spring Minerals enjoys direct access to international shipping routes
                connecting the GCC, India, and East Africa. This proximity ensures cost efficiency, fast turnaround,
                and reliable supply for our international clients.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="about-image">
            <img src="/aboutoman.png" alt="Excavation and loading" className="about-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionTechnology;
