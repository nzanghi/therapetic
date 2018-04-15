import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Media from 'react-media';

import MobileNav from '../components/nav.mobile';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false
    };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation(e) {
    e.preventDefault();
    this.setState({
      showMobileNav: !this.state.showMobileNav
    });
  }

  handleNavClick(e) {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 655 });
    this.setState({
      showMobileNav: false
    });
  }

  render() {
    return (
      <Media query={{ maxWidth: 900 }}>
        {matches =>
          matches ? (
            <div>
              {this.state.showMobileNav && <MobileNav handleNavClick={this.handleNavClick} />}
              <button className="hamburger" onClick={this.toggleMobileNavigation}>
                &#8801;
              </button>
            </div>
          ) : (
            <ul className="nav" role="navigation">
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
          )
        }
      </Media>
    );
  }
}

export default Nav;
