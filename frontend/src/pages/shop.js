import React from "react";
import emailicon from '../assets/svgs/emailbk.svg';
import instaIcon from '../assets/svgs/instabk.svg';
const About = () => {
    return (
      <div className="Shop">
        <div className="shop-container">
          <h1 className="Title">- Coming Soon! -</h1>
          <p>We are currently developing this feature and will launch soon!</p>
          <p>Meanwhile you can place an order on the Instagram page or send out an email to us.</p>
          <div className="shop-icons-box">
            <a className="shop-icons" href="https://www.instagram.com/nimrat.brar_acrylic.art" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" />
            </a>
            <a className="shop-icons" href="mailto:nik1359@outlook.com">
              <img src={emailicon} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;