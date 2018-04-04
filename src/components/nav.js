import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  'text-decoration': 'underline'
};

const Nav = () => {
  return (
    <ul className="nav" role="navigation">
      <li
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <NavLink to="/" activeClassName="active" exact={true}>
          Main
        </NavLink>
      </li>
      <li
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <NavLink to="/photonic-light-therapy" activeClassName="active">
          Photonic Light Therapy
        </NavLink>
      </li>
      <li
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <NavLink to="/sport-massage" activeClassName="active">
          Sport Massage
        </NavLink>
      </li>
      <li
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <NavLink to="/testimonials" activeClassName="active">
          Testimonials
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
