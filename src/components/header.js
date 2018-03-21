import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../assets/images/Logo.png')

// You left off here. You need to get this background image setup somehow

const Header = () => {
  return (
    <div id="head">
      <Link to="/"><img id="logo" src={logo} alt="Home"></img></Link>
      <ul id="nav">
        <li className="nav__item">
          <Link to="/">Main</Link>
        </li>
        <li className="nav__item">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav__item">
          <Link to="/photonic-light-therapy">Photonic Light Therapy</Link>
        </li>
        <li className="nav__item">
          <Link to="/sport-massage">Sport Massage</Link>
        </li>
        <li className="nav__item">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="nav__item">
          {' '}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
