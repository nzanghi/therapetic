import React from 'react';
import { Link } from 'react-router-dom';
// const logo = require('../assets/images/Logo.png');

const Footer = () => {
  return (
    <footer>
      <div id="fb-root" />
      <div id="copyright">
        <p id="copyright__text">© Therapetic Hands | Canine and Equine Massage</p>
      </div>
      <div
        class="fb-like"
        data-href="https://www.facebook.com/TherapeticHands/"
        data-layout="button"
        data-action="like"
        data-size="large"
        data-show-faces="false"
        data-share="false"
      />
    </footer>
  );
};

export default Footer;
