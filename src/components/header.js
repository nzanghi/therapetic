import React from 'react';
// import { Link } from 'react-router-dom';
const logo = require('../assets/images/Logo.png');

import Nav from './nav';

const Header = () => {
  return (
    <header class="head">
      <a
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >
        <img class="logo" src={logo} alt="Home" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
