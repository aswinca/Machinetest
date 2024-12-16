import React from 'react';
import './Style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>&copy; 2024 DeepNet Solutions. All Rights Reserved.</p>
        <p>
          Contact: 
          <a href="mailto:info@deepnetsoft.com">info@deepnetsoft.com</a> | 
          <a href="tel:+915968743340">+91 9568743340</a>
        </p>
      </div>

      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="#" target="_blank" rel="noopener noreferrer">IG</a>
        <a href="#" target="_blank" rel="noopener noreferrer">TW</a>
      </div>

      <div className="footer-bottom">
        <p>
          Designed by 
          <a href="https://www.deepnetsoft.com" target="_blank" rel="noopener noreferrer">DeepNet Soft</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
