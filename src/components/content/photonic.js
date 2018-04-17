import React from 'react';

const Photonic = () => {
  return (
    <section className="main">
      <h1>Photonic Light Therapy</h1>
      <div className="main-content">
        <p>Blue Light Therapy | Skin condition and Wound treatments:</p>
        <p>Horse: $40 Dog: $30</p>
      </div>
      <div className="main-content">
        <p>Red Light Therapy | Ligament, Joint, and Tendon Treatment:</p>
        <p>Horse: $70 Dog: $60</p>
        <p>Full Body Treatment:</p>
        <p>Horse: $85 Dog: $65</p>
      </div>
      <div className="main-content notice">
        <p>Note: Length of massage depends on the size of the animal</p>
        <p>Horse massage will last anywhere between 45 minutes and an hour</p>
        <p>Dog massage will last anywhere between 20 and 45 minutes</p>
      </div>
    </section>
  );
};

export default Photonic;
