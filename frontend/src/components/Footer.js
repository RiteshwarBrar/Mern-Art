import React from 'react';
import emailicon from '../assets/svgs/email.svg';
import instaIcon from '../assets/svgs/insta.svg';
function Footer() {
  return (
    <footer className="footer">
      <div class="footer-content">
        <div class="footer-logo">
        <p>&copy; 2024 Nimrat's Art Store. All rights reserved.</p>
        <p>Website designed and developed by Riteshwar Brar</p>
        <p>riteshwarbrar@gmail.com</p>
        </div>
        <div class="footer-icons">
          <a href="https://www.instagram.com/nimrat.brar_acrylic.art" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="mailto:nik1359@outlook.com">
            <img src={emailicon} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
