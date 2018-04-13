import React from 'react';

import importAll from '../utils/importAll';


const images = importAll(require.context('../assets/images/massage-pics', true, /.jpg$/i));
console.log(images);

const Main = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // images.forEach((value) => console.log(value.property));
  return (
    <div id="main">
      <h1>Welcome!</h1>
      <p>
        Nicole has always had a love for Animals and decided at a young age to pursue her passion and promised to find a way
        to help any animal at any cost. She is certified in Equine and Canine Sports Massage therapy, and also offers
        exciting Photonic Light Therapy.
      </p>
      <p>
        Nicole is a very experienced animal handler and has worked as a dog care specialist for many years. She has worked
        with horses from a very young age, owning horses, showing and training horses, teaching novice horse enthusiasts how
        to properly handle horses, and being a stable hand for 6 years.
      </p>
      <p>
        She attended Rutgers University where she participated in the program Rutgers University Teaching Herd where she
        promoted horses that needed to be adopted and taught them proper ground manners.
      </p>
      <p>
        Nicole has a true passion for what she does, and you and your animals will most certainly experience this in every
        session.
      </p>
    </div>
  );
};

export default Main;
