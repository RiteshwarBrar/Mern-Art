import React from 'react';
import { Button } from 'react-bootstrap';
function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Nimrat's Art Store</h1>
      <p>From ready-for-sale paintings to custom orders.</p>
      <Button className="shop-now" href="/paintings">Shop Now</Button>
    </section>
  );
}

export default Hero;
