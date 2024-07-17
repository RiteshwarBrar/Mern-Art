import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="hero">
      <div className="box">
        <h1>Welcome to Nimrat Brar's Art Gallery</h1>
        <p>From ready-for-sale paintings to custom orders.</p>
        <Link className="shop-now" to="/paintings">Explore Now</Link>
        {/* <div className="hero-image">_</div> */}
      </div>
    </div>
  );
}

export default Hero;
