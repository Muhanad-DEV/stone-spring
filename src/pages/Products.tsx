import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';

const Products: React.FC = () => {
  useEffect(() => {
    // Set body class for products page styling
    document.body.className = 'products-page';

    // Initialize AOS
    AOS.init({ 
      duration: 700, 
      once: true, 
      offset: 80 
    });

    return () => {
      // Cleanup body class
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Products & Applications */}
      <section className="products-section">
        <div className="products-container">
          <h1 className="products-title" data-aos="fade-up">Products &amp; Applications</h1>
          <p className="products-lead" data-aos="fade-up" data-aos-delay="100">
            Our primary product, Calcium Carbonate (CaCO<sub>3</sub>), is known for its high purity, whiteness, and consistency. Key applications include:
          </p>

          <ul className="product-list" data-aos="fade-up" data-aos-delay="150">
            <li>Oil &amp; Gas (drilling fluids)</li>
            <li>Construction &amp; Infrastructure (concrete, cement, paints)</li>
            <li>Plastics &amp; Polymers</li>
            <li>Water Treatment</li>
            <li>Iron &amp; Steel production</li>
          </ul>

          <p className="products-copy" data-aos="fade-up" data-aos-delay="200">
            In addition to calcium carbonate, Stones Spring Minerals offers a wide range of minerals, including Dolomite, Gypsum, Barite, and Bentonite.
          </p>
        </div>
      </section>

      {/* Key Chemical & Physical Data */}
      <section className="products-data-section">
        <div className="products-container">
          <h2 className="products-subtitle" data-aos="fade-up">Key Chemical &amp; Physical Data</h2>
          <ul className="product-data-list" data-aos="fade-up" data-aos-delay="120">
            <li>Formula: CaCO<sub>3</sub></li>
            <li>Molecular Weight: 100.09 g/mol</li>
            <li>Purity (CaCO<sub>3</sub>): &gt;98.8%</li>
            <li>Whiteness: &gt;96.8%</li>
            <li>Particle Size: Available in grades 25 µm and above</li>
            <li>Moisture Content: &lt;0.5%</li>
            <li>Specific Gravity: ~2.7 g/cm<sup>3</sup></li>
            <li>Full TDS and SDS available upon request.</li>
          </ul>
        </div>
      </section>

      {/* Bottom image bar */}
      <section className="product-bottom-bar" aria-label="Product bottom image">
        <img 
          className="product-bottom-img" 
          src="/Corporate Profile – Stones Spring Minerals-min.png" 
          alt="Stones Spring plant" 
        />
      </section>
    </>
  );
};

export default Products;
