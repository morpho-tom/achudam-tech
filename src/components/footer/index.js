import React from 'react';
import "./style.css"

const Footer = () => {
  return (
    <>  
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <ul>
            <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright by Achudamtech. All rights reserved.
      </div>
    </footer>
        </>
  );
};

export default Footer;
