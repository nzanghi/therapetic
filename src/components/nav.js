import React from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';

// Use this to control scrolling position
const scroll = { top: 649, left: 0, behavior: 'smooth' };

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      showMobileNav: true
    };

    this.handleMobileClick = this.handleMobileClick.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
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
      <Media query={{ maxWidth: 990 }}>
        {matches =>
          matches ? (
            <div>
              <button className="hamburger" onClick={this.handleMobileClick}>
                &#8801;
              </button>
              {this.state.showMobileNav && (
                <div className="mobile-navigation">Mobile Nav Here</div>
              )}
            </div>
          ) : (
            <ul className="nav" role="navigation">
              <li
                onClick={() => {
                  window.scroll(scroll);
                }}
              >
                <NavLink to="/" activeClassName="active" exact={true}>
                  Main
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll(scroll);
                }}
              >
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll(scroll);
                }}
              >
                <NavLink to="/photonic-light-therapy" activeClassName="active">
                  Photonic Light Therapy
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll(scroll);
                }}
              >
                <NavLink to="/sport-massage" activeClassName="active">
                  Sport Massage
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll(scroll);
                }}
              >
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
