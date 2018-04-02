import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  'text-decoration': 'underline'
};

const Nav = () => {
  return (
    <nav>
      <ul id="nav">
        <li>
          <NavLink to="/" activeClassName="active" exact={true}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/photonic-light-therapy" activeClassName="active">
            Photonic Light Therapy
          </NavLink>
        </li>
        <li>
          <NavLink to="/sport-massage" activeClassName="active">
            Sport Massage
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials" activeClassName="active">
            Testimonials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
