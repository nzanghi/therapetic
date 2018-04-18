import React from 'react';

import importAll from '../../utils/importAll';

const top = require('../../assets/images/massage-pics/main-horse-massage-top.JPG');
const bottom = require('../../assets/images/massage-pics/cute.JPG');

const Main = () => {
  // images.forEach((value) => console.log(value.property));
  return (
    <section className="main">
      <h1 id="main-header">Welcome!</h1>
      <div className="main-content">
        <div className="content-block">
          <img className="main-image-top" src={top} />
          <div className="text-block">
            <p className="text-block-text">
              Nicole has always had a love for Animals and decided at a young age to pursue her passion and promised to find a way
              to help any animal at any cost. She is certified in Equine and Canine Sports Massage therapy, and also offers
              exciting Photonic Light Therapy.
            </p>
            <p className="text-block-text">
              Nicole is a very experienced animal handler and has worked as a dog care specialist for many years. She has worked
              with horses from a very young age, owning horses, showing and training horses, teaching novice horse enthusiasts how
              to properly handle horses, and being a stable hand for 6 years.
            </p>
          </div>
        </div>
        <div className="content-block">
          <div claasName="text-block">
            <p className="text-block-text">
              She attended Rutgers University where she participated in the program Rutgers University Teaching Herd where she
              promoted horses that needed to be adopted and taught them proper ground manners.
            </p>
            <p className="text-block-text">
              Nicole has a true passion for what she does, and you and your animals will most certainly experience this in every
              session.
            </p>
          </div>
          <img className="main-image-bottom" src={bottom} />
        </div>
      </div>
    </section>
  );
};

export default Main;
