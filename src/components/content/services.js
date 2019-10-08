import React from 'react';

const top = require('../../assets/images/massage-pics/horse-services.jpg');
const bottom = require('../../assets/images/massage-pics/dog-services.jpg');

const healing1 = require('../../assets/images/healing-pics/day-1.jpg');
const healing2 = require('../../assets/images/healing-pics/between.jpg');
const healing3 = require('../../assets/images/healing-pics/day-4.jpg');

const Services = () => {
  return (
    <section className="main">
      <h1 id="main-header">Services</h1>
      <div className="main-content">
        <div className="content-block">
          <div className="text-block normal">
            <h2 className="text-block-text normal">Horses:</h2>
            <p className="text-block-text normal">Photonic Light Pain Free Pad System: Full Body Massage: $100</p>
            <p className="text-block-text normal">Photonic Light Pain Free Pad System: Full Body Pad: $70</p>
            <p className="text-block-text normal">Full Body Massage + Light Treatment: $80</p>
            <p className="text-block-text normal">Full Body Massage: $70</p>
            <p className="text-block-text normal">Full Body Light Treatment: $60</p>
            <p className="text-block-text normal">Targeted Area with Light Treatment: $30-$50</p>
          </div>
          <img className="main-image top short wide" title="Paris yawning from relaxtion!" src={top} />
        </div>
        <div className="content-block">
          <img className="main-image bottom short wide" src={bottom} />
          <div className="text-block normal">
            <h2 className="text-block-text normal">Dogs: Pricing will depend on size (small - large)</h2>
            <p className="text-block-text normal">Photonic Light Pain Free Pad System: Full Body Massage: $80</p>
            <p className="text-block-text normal">Photonic Light Pain Free Pad System: Full Body Pad: $60</p>
            <p className="text-block-text normal">Full Body Massage + Light Treatment: $40-60</p>
            <p className="text-block-text normal">Full Body Massage: $35-50</p>
            <p className="text-block-text normal">Full Body Light Treatment $30-$40</p>
            <p className="text-block-text normal">Targeted Area with Light Treatment: $25-$40</p>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block normal">
            <h2 className="text-block-text normal">Wound Care</h2>
            <p className="text-block-text normal">Pricing will depend on size of wound and the frequency of visits:</p>
            <p className="text-block-text normal">
              Photonic Lights speeds up cellular regeneration, which accelerates the healing process of a wound.
            </p>
            <p className="text-block-text normal">Perfect for reducing recovery time!</p>
          </div>
        </div>
        <div className="content-block">
          <div className="image-block">
            <img className="image" src={healing1} />
            <img className="image" src={healing2} />
            <img className="image" src={healing3} />
          </div>
        </div>
        <div className="content-block bottom">
          <div className="text-block normal">
            <p className="text-block-text">
              Note: Length of massage depends on the size of the animal Horse massage will last anywhere between 45 minutes and an hour Dog
              massage will last anywhere between 20 and 45 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
