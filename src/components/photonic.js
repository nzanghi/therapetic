import React from 'react';

const Photonic = () => {
  return (
    <div className="photonic">
      <div id="photonic-lights">
        <h1>Photonic Light Therapy</h1>
        <h2>Blue Light Therapy:</h2>
        <h3>Skin condition and Wound treatment:</h3>
        <p>Horse: $40</p>
        <p>Dog: $30</p>

        <h2>Red Light Therapy:</h2>
        <h3>Ligament, Joint, and Tendon Treatment:</h3>
        <p>Horse: $70</p>
        <p>Dog: $60</p>
      </div>
      <h3>Full Body Treatment:</h3>
      <p>Horse: $85</p>
      <p>Dog: $65</p>

      <div>
        <p>Note: Length of massage depends on the size of the animal</p>
        <p>Horse massage will last anywhere between 45 minutes and an hour</p>
        <p>Dog massage will last anywhere between 20 and 45 minutes</p>
      </div>
    </div>
  );
};

export default Photonic;
