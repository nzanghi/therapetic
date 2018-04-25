import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import FooterLogo from '../assets/images/Logo.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerOffset: null
    };
  }
  componentWillReceiveProps() {
    this.setState({
      footerOffset: this.refs.Footer.offsetTop - this.refs.Footer.offsetHeight - 10
    });
  }
  componentDidMount() {
    this.setState({
      footerOffset: this.refs.Footer.offsetTop - this.refs.Footer.offsetHeight - 10
    });
  }
  render() {
    const breakpoint = this.props.scrollY > this.state.footerOffset;
    return (
      <div className="footer" ref="Footer">
        <div className="footer-logo-container">
          <img id="footer-logo" src={FooterLogo} />
        </div>
        <div className={breakpoint ? 'social-container snap' : 'social-container'}>
          <SocialIcon className={breakpoint ? 'fun-item locked' : 'fun-item'} url="mailto:nicole.hahn07@gmail.com" />
          <SocialIcon className={breakpoint ? 'fun-item locked' : 'fun-item'} url="https://www.facebook.com/TherapeticHands/" />
          <SocialIcon className={breakpoint ? 'fun-item locked' : 'fun-item'} url="https://www.instagram.com/therapetichands/" />
        </div>
        <p id="copyright">Therapetic Hands | Canine and Equine Massage ©</p>
      </div>
    );
  }
}

export default Footer;
