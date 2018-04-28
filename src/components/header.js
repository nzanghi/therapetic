import React from 'react';
// import { Link } from 'react-router-dom';
const logo = require('../assets/images/Logo.png');

import Nav from './nav';

const scroll = {
  top: 0,
  left: 0,
  behavior: 'smooth'
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.scrollY < 10 ? 'head ' : 'head locked'}>
        <a
          onClick={() => {
            document.querySelector('.site-container').scrollIntoView({ block: 'start', behavior: 'smooth' });
          }}
        >
          <img className={this.props.scrollY < 10 ? 'logo' : 'logo locked'} src={logo} alt="Home" />
        </a>
        <Nav />
      </div>
    );
  }
}

export default Header;
