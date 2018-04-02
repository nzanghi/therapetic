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
    </header>
  );
};

export default Header;
