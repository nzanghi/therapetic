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

  handleNavClick({ mobile }) {
    const top = mobile ? 390 : 692;
    window.scroll({ behavior: 'smooth', top: top });
    this.setState({
      showMobileNav: false
    });
  }

  render() {
    return (
      <Media query={{ maxWidth: 1200 }}>
        {matches =>
          matches ? (
            <React.Fragment>
              {this.state.showMobileNav && <MobileNav handleNavClick={this.handleNavClick} toggleMobileNavigation={this.toggleMobileNavigation}/>}
              <button className={this.props.scrollY < 10 ? 'hamburger hidden' : 'hamburger'} onClick={this.toggleMobileNavigation}>
                &#8801;
              </button>
            </React.Fragment>
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
