import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import AboutOman from './pages/AboutOman';
import Message from './pages/Message';
import Products from './pages/Products';
import ProductionTechnology from './pages/ProductionTechnology';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-oman" element={<AboutOman />} />
          <Route path="/message" element={<Message />} />
          <Route path="/products" element={<Products />} />
          <Route path="/production-technology" element={<ProductionTechnology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;