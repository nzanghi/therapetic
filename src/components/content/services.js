import React from 'react';

const top = require('../../assets/images/massage-pics/main-horse-massage-top.JPG');
const bottom = require('../../assets/images/massage-pics/cute.JPG');

const Services = () => {
  return (
    <section className="main">
      <h1 id="main-header">Services</h1>
      <div className="main-content">
        <div className="content-block">
          <img className="main-image" src={top} />
          <div className="text-block normal">
            <h3 className="text-block-text">Horse:</h3>
            <p className="text-block-text normal">Full body massage and light treatment: 80</p>
            <p className="text-block-text normal">Just massage: 70</p>
            <p className="text-block-text normal">Just light (full body): 60</p>
            <p className="text-block-text normal">Specific area for lights: 30-50</p>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block normal">
            <h3 className="text-block-text">Dog: pricing depends on size</h3>
            <p className="text-block-text normal">Full body massage and light: 40-60</p>
            <p className="text-block-text normal">Just massage: 35-50</p>
            <p className="text-block-text normal">Just light 30-40</p>
            <p className="text-block-text normal">Specific are: 25-400</p>
          </div>
          <img className="main-image bottom" src={bottom} />
        </div>
        <div className="content-block">
          <div className="text-block normal">
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
