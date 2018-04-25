import React from 'react';

import BenefitsPicture from '../../assets/images/benefits.png';

const Sport = () => {
  return (
    <section className="main">
      <h1 id="main-header">Sports Massage Therapy</h1>
      <div className="main-content">
        <div className="content-block">
          <p>
            There are many positive benefits to sports massage therapy! It's not only relaxing, but massage prevents injury while
            maintaining the animal’s body.
          </p>
          <p>There are also many other benefits which include:</p>
          <div class="row">
            <div class="col-md-12">
              <p>1. Improves circulation which promotes more rapid recovery from and injury </p>
              <p>2. Relieves tension </p>
              <p>3. Eases muscle spasm </p>
              <p>4. Increases range of motion </p>
              <p>5. Enhances muscle tone </p>
              <p>6. Raises the athletic performance and endurance </p>
              <p>7. Helps the animal release toxins stored in the body </p>
              <p>8. And overall makes the animal much happier and more comfortable </p>
            </div>
            <img id="sport-img" src={BenefitsPicture} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport;
