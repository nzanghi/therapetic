import React from 'react';

const Sport = () => {
  return (
    <section className="main">
      <h1>Sports Massage Therapy</h1>
      <div className="main-content">
        <h3>Full Body:</h3>
        <p>Horse: $75</p>
        <p>Dog: $45</p>
      </div>
      <div className="main-content">
        <h3>Full Body Massage + Photonic Red light treatment:</h3>
        <p>Horse: $100</p>
        <p>Dog: $70</p>
      </div>
      <div className="main-content">
        <p>Note: Length of massage depends on the size of the animal</p>
        <p>Horse massage will last anywhere between 45 minutes and an hour</p>
        <p>Dog massage will last anywhere between 20 and 45 minutes</p>
      </div>
    </section>
  );
};

export default Sport;
