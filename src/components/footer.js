import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import FooterLogo from '../assets/images/Logo.png';
// 2030

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      snap: false
    };
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleScroll() {
    const { Footer } = this.refs;
    let top = Footer.getBoundingClientRect().top;
    this.setState({
      top
    });
    if (top <= 800) {
      this.setState({
        snap: true
      });
    } else {
      this.setState({
        snap: false
      });
    }
  }
  render() {
    return (
      <div className="footer" ref="Footer">
        <img id="footer-logo" src={FooterLogo} />
        <div className={this.state.snap ? 'fun snap' : 'fun'}>
          <SocialIcon className="fun-item" url="mailto:nicole.hahn07@gmail.com" />
          <SocialIcon className="fun-item" url="https://www.facebook.com/TherapeticHands/" />
          <SocialIcon className="fun-item" url="https://www.instagram.com/therapetichands/" />
        </div>
        <p id="copyright">© Therapetic Hands | Canine and Equine Massage</p>
      </div>
    );
  }
}

export default Footer;
