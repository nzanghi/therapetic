import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
        <div id="social-media">
          <SocialIcon className="social-media-item" url="mailto:nicole.hahn07@gmail.com" />
          <SocialIcon className="social-media-item" url="https://www.facebook.com/TherapeticHands/" />
          <SocialIcon className="social-media-item" url="https://www.instagram.com/therapetichands/" />
        </div>
        <p id="copyright">© Therapetic Hands | Canine and Equine Massage</p>
    </div>
  );
};

export default Footer;
