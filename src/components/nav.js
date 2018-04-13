import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Media from 'react-media';

// Use this to control scrolling position
const scroll = { top: 649, left: 0, behavior: 'smooth' };

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      showMobileNav: false
    };

    this.handleMobileClick = this.handleMobileClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleNavClick(e) {
    e.preventDefault();
    const content = document.querySelector('.content');
    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleMobileClick(e) {
    e.preventDefault();
    this.setState({
      showMobileNav: !this.state.showMobileNav
    });
  }
  // window.scroll({top: 1425, behavior: 'smooth'});
  render() {
    return (
      <Media query={{ maxWidth: 900 }}>
        {matches =>
          matches ? (
            <div>
              <button className="hamburger" onClick={this.handleMobileClick}>
                &#8801;
              </button>
              {this.state.showMobileNav && <div className="mobile-navigation">Mobile Nav Here</div>}
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
