import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  useEffect(() => {
    // Set body class for home page styling
    document.body.className = '';
    
    // Add loading animation
    document.body.classList.remove('loaded');
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    // Preload images for better performance
    const preloadImages = () => {
      const images = ['bc.png', '3.png', 'about-us-bc.png', 'vision-mission-bg.png'];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.content-overlay');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      // Cleanup observer
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Main Content Section */}
      <main className="main-content">
        <div className="content-overlay">
          <div className="content-text">
            <h1 className="main-title">
              <span className="title-line">STONES</span>
              <span className="title-line">SPRING</span>
              <span className="title-line">MINERALS</span>
            </h1>
            <p className="tagline">"CRAFTED BY NATURE, DEFINED BY EXCELLENCE"</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
