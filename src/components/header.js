import React from 'react';

const logo = require('../assets/images/Logo.png');

import Nav from './nav';

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
