import React from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';

const active = {
  'text-decoration': 'underline'
};

class Nav extends React.Component {
  render() {
    return (
      <Media query={{ maxWidth: 990 }}>
        {matches =>
          matches ? (
            <button className="hamburger" onClick={() => console.log('have to toggle overlay')}>
              &#8801;
            </button>
          ) : (
            <ul className="nav" role="navigation">
              <li
                onClick={() => {
                  window.scroll({ top: 750, left: 0, behavior: 'smooth' });
                }}
              >
                <NavLink to="/" activeClassName="active" exact={true}>
                  Main
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll({ top: 750, left: 0, behavior: 'smooth' });
                }}
              >
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll({ top: 750, left: 0, behavior: 'smooth' });
                }}
              >
                <NavLink to="/photonic-light-therapy" activeClassName="active">
                  Photonic Light Therapy
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll({ top: 750, left: 0, behavior: 'smooth' });
                }}
              >
                <NavLink to="/sport-massage" activeClassName="active">
                  Sport Massage
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scroll({ top: 750, left: 0, behavior: 'smooth' });
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
