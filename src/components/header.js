import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../assets/images/Logo.png');

// You left off here. You need to get this background image setup somehow

const Header = () => {
  return (
    <header>
      <div id="head">
        <Link to="/">
          <img id="logo" src={logo} alt="Home" />
        </Link>
      </div>
      <ul id="nav">
        <Link to="/">Main</Link>
        <Link to="/services">Services</Link>
        <Link to="/photonic-light-therapy">Photonic Light Therapy</Link>
        <Link to="/sport-massage">Sport Massage</Link>
        <Link to="/testimonials">Testimonials</Link> <Link to="/contact">Contact</Link>
      </ul>
    </header>
  );
};

export default Header;
