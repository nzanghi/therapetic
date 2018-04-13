import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import FooterLogo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <div className="footer">
    <img id="footer-logo" src={FooterLogo}></img>
        <div id="fun">
          <SocialIcon className="fun-item" url="mailto:nicole.hahn07@gmail.com" />
          <SocialIcon className="fun-item" url="https://www.facebook.com/TherapeticHands/" />
          <SocialIcon className="fun-item" url="https://www.instagram.com/therapetichands/" />
        </div>
        <p id="copyright">© Therapetic Hands | Canine and Equine Massage</p>
    </div>
  );
};

export default Footer;
