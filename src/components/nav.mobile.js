import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Media from 'react-media';

// Use this to control scrolling position
const scroll = { top: 649, left: 0, behavior: 'smooth' };

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.props.handleNavClick.bind(this);
  }

  render() {
    return (
      <div className="mobile-navigation">
        <ul className="mobile-navigation-container">
          <li onClick={this.handleNavClick}>
            <NavLink to="/" activeClassName="active" exact={true}>
              Main
            </NavLink>
          </li>
          <li onClick={this.handleNavClick}>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li onClick={this.handleNavClick}>
            <NavLink to="/photonic-light-therapy" activeClassName="active">
              Photonic Light Therapy
            </NavLink>
          </li>
          <li onClick={this.handleNavClick}>
            <NavLink to="/sport-massage" activeClassName="active">
              Sport Massage
            </NavLink>
          </li>
          <li onClick={this.handleNavClick}>
            <NavLink to="/testimonials" activeClassName="active">
              Testimonials
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileNav;
