import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Üst Kısım */}
      <div className="footer-top">
        <p className="footer-subtitle">Connect With</p>
        <h2 className="footer-title">Themirk Commerce LLC</h2>
        <p className="footer-description">
          Contact us today to learn more about our products and services or to place an order.
        </p>
      </div>

      {/* Alt Kısım */}
      <div className="footer-bottom">
        <div className="about-company">
          <h4 className='title'>About the company</h4>
          <p style={{ lineHeight: '22px' }}>
            Themirk Commerce LLC is a U.S.-based company specializing in sourcing and distributing high-quality products in Beauty, Home Decor, and Pet categories. We are committed to reliability, customer satisfaction, and building long-term business relationships.
          </p>
        </div>

        <div className="social-icons-container">
          <p className='title'>Social Media</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/themirkcommerce"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/themirkcommerce/"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="categories-container">
          <p className="title">Categories</p>
          <ul className="categories-list">
            <li>Beauty</li>
            <li>Home Decor</li>
            <li>Pet</li>
          </ul>
        </div>

        <div className="contact-info">
          <p>
            <FaMapMarkerAlt />
            <div style={{ lineHeight: '21px', marginBottom: '3px' }}>
              <div className='title'>Contact</div>
              <div>7901 4th St N, STE 21739</div>
              <div>St. Petersburg, FL 33702</div>
              <div>Pinellas County, United States</div>
            </div>
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+905398664465">+90 539 866 44 65</a>
          </p>
          <p>
            <FaEnvelope /> <a href="mailto:info@themirkcommerce.com">info@themirkcommerce.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
