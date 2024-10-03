import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import './footer.css'; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">Contact Us</h2>
            <p>Bhilai Institute of Technology</p>
            <p>Bhilai House, Durg - 491001</p>
            <p>Chhattisgarh, India</p>
            <p>Phone: +91-788-2359297</p>
            <p>Email: principal@bitdurg.ac.in</p>
          </div>
          <div>
            <h2 className="footer-title">Quick Links</h2>
            <ul className="footer-links">
              <li><a href="#">AICTE Mandatory Disclosure</a></li>
              <li><a href="#">NIRF</a></li>
              <li><a href="#">NBA Accreditation</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Follow Us</h2>
            <div className="footer-icons">
              <a href="#" className="footer-icon"><Facebook /></a>
              <a href="#" className="footer-icon"><Twitter /></a>
              <a href="#" className="footer-icon"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © 2024 Bhilai Institute of Technology, Durg. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
