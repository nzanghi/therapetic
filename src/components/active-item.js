import React from 'react';
import { browserHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ActiveItemLink extends React.Component {
  render() {
    var isActive = location.pathname === this.props.to;
    console.log('isActive: ', isActive);
    var activeClassName = isActive ? 'nav-item active' : '';
    return (
      <Link className={activeClassName} history={browserHistory} {...this.props}>
      {console.log(browserHistory)}
        {this.props.children}
      </Link>
    );
  }
}

// ActiveItemLink.contextTypes = {
//   router: PropTypes.object
// };

export default ActiveItemLink;
