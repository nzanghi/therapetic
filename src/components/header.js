import React from 'react';
// import { Link } from 'react-router-dom';
const logo = require('../assets/images/Logo.png');

import Nav from './nav';

const scroll = {
  top: 0,
  left: 0,
  behavior: 'smooth'
};

const Header = () => {
  return (
    <div className="head">
      <a
        onClick={() => {
          document.querySelector('.site-container').scrollIntoView({ block: 'start', behavior: 'smooth' });
        }}
      >
        <img className="logo" src={logo} alt="Home" />
      </a>
      <Nav />
    </div>
  );
};

export default Header;
