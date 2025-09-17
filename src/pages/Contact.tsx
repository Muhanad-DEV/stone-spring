import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_phone: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set body class for contact page styling
    document.body.className = 'contact-page';

    // Initialize AOS
    if ((window as any).AOS) {
      (window as any).AOS.init({ duration: 700, once: true, offset: 80 });
    }

    // Initialize EmailJS
    emailjs.init('4IXgyhRnH5anGACYM');

    return () => {
      // Cleanup body class
      document.body.className = '';
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email with custom template - exactly like original
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        from_phone: formData.from_phone,
        message: formData.message,
        to_email: 'admin@stonesspring.net',
        company_name: 'Stones Spring Minerals',
        current_date: new Date().toLocaleString('en-US', {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit'
        })
      };

      await emailjs.send('service_9tlmo5i', 'template_3iiezxs', templateParams);
      
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        from_name: '',
        from_phone: '',
        from_email: '',
        message: ''
      });
    } catch (error) {
      console.log('FAILED...', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left: Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <h1 className="contact-title">GET IN TOUCH</h1>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="from_name" 
                    className="form-control" 
                    placeholder="Your Name" 
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="from_phone" 
                    className="form-control" 
                    placeholder="Phone Number" 
                    value={formData.from_phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="from_email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    className="form-control" 
                    rows={4} 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND NOW'}
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="contact-info-section" data-aos="fade-left">
              <h1 className="contact-title">TALK TO US</h1>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    {/* Mail icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">EMAIL</span>
                    <span className="contact-value">admin@stonesspring.net</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    {/* Phone icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">PHONE NUMBER</span>
                    <span className="contact-value">+968 9666 4349</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    {/* Location icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">ADDRESS</span>
                    <span className="contact-value">Sohar Industrial Area (Madayn), Oman</span>
                  </div>
                </div>
              </div>

              <div className="follow-us">
                <span className="follow-label">FOLLOW US:</span>
                <a 
                  href="https://www.linkedin.com/company/stones-spring/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon" 
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
