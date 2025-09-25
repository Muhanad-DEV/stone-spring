import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Bootstrap dropdowns
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
      dropdownElementList.map(function (dropdownToggleEl: any) {
        return new bootstrap.Dropdown(dropdownToggleEl);
      });
    }
  }, []);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isAboutActive = () => ['/about', '/about-oman', '/message', '/why-choose-us'].includes(location.pathname);
  const isServicesActive = () => ['/products', '/production-technology'].includes(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/stones-spring-logo.png" alt="Stones Spring Logo" className="logo-image me-2" />
          <span className="company-name">STONES SPRING</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a 
                className={`nav-link dropdown-toggle ${isAboutActive() ? 'active' : ''}`} 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                ABOUT US
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className={`dropdown-item ${isActive('/message') ? 'active' : ''}`} to="/message">
                    MESSAGE
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive('/about') ? 'active' : ''}`} to="/about">
                    WHO WE ARE
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive('/about-oman') ? 'active' : ''}`} to="/about-oman">
                    ABOUT OMAN
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive('/why-choose-us') ? 'active' : ''}`} to="/why-choose-us">
                    WHY CHOOSE US
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a 
                className={`nav-link dropdown-toggle ${isServicesActive() ? 'active' : ''}`} 
                href="#" 
                id="navbarDropdownMenuLink2" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                <li>
                  <Link className={`dropdown-item ${isActive('/products') ? 'active' : ''}`} to="/products">
                    OUR PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive('/production-technology') ? 'active' : ''}`} to="/production-technology">
                    TECHNOLOGY
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
