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
        <button className="button-close" onClick={this.toggleMobileNavigation}>
          X
        </button>
        <NavLink
          to="/"
          activeClassName="active"
          exact={true}
          onClick={() => this.handleNavClick({ mobile: true })}
        >
          Main
        </NavLink>
        <NavLink
          to="/services"
          activeClassName="active"
          onClick={() => this.handleNavClick({ mobile: true })}
        >
          Services
        </NavLink>
        <NavLink
          to="/photonic-light-therapy"
          activeClassName="active"
          onClick={() => this.handleNavClick({ mobile: true })}
        >
          Photonic Light Therapy
        </NavLink>
        <NavLink
          to="/sport-massage"
          activeClassName="active"
          onClick={() => this.handleNavClick({ mobile: true })}
        >
          Sport Massage
        </NavLink>
        <NavLink
          to="/testimonials"
          activeClassName="active"
          onClick={() => this.handleNavClick({ mobile: true })}
        >
          Testimonials
        </NavLink>
      </div>
    );
  }
}

export default MobileNav;
