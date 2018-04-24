import React from 'react';

const top = require('../../assets/images/massage-pics/main-horse-massage-top.JPG');
const bottom = require('../../assets/images/massage-pics/cute.JPG');

const Services = () => {
  return (
    <section className="main">
      <h1 id="main-header">Services</h1>
      <div className="main-content">
        <div className="content-block">
          <img className="main-image-top" src={top} />
          <div className="text-block">
            <h3>Horse:</h3>
            <p className="text-block-text">Full body massage and light treatment: 80</p>
            <p className="text-block-text">Just massage: 70</p>
            <p className="text-block-text">Just light (full body): 60</p>
            <p className="text-block-text">Specific area for lights: 30-50</p>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block">
            <h3>Dog: pricing depends on size</h3>
            <p className="text-block-text">Full body massage and light: 40-60</p>
            <p className="text-block-text">Just massage: 35-50</p>
            <p className="text-block-text">Just light 30-40</p>
            <p className="text-block-text">Specific are: 25-400</p>
          </div>
          <img className="main-image-bottom" src={bottom} />
        </div>
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">Note: Length of massage depends on the size of the animal</p>
            <p className="text-block-text">Horse massage will last anywhere between 45 minutes and an hour</p>
            <p className="text-block-text">Dog massage will last anywhere between 20 and 45 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
