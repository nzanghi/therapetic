import React from "react";
import { Link, NavLink } from "react-router-dom";

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.props.handleNavClick.bind(this);
    this.toggleMobileNavigation = this.props.toggleMobileNavigation.bind(this);
  }

  render() {
    return (
      <div className="mobile-navigation">
        <button
          className="button-close"
          onClick={this.toggleMobileNavigation}
        >
          X
        </button>
        <ul className="mobile-navigation-container">
          <li onClick={() => this.handleNavClick({ mobile: true })}>
            <NavLink to="/" activeClassName="active" exact={true}>
              Main
            </NavLink>
          </li>
          <li onClick={() => this.handleNavClick({ mobile: true })}>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li onClick={() => this.handleNavClick({ mobile: true })}>
            <NavLink to="/photonic-light-therapy" activeClassName="active">
              Photonic Light Therapy
            </NavLink>
          </li>
          <li onClick={() => this.handleNavClick({ mobile: true })}>
            <NavLink to="/sport-massage" activeClassName="active">
              Sport Massage
            </NavLink>
          </li>
          <li onClick={() => this.handleNavClick({ mobile: true })}>
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
