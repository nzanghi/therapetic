import React from 'react';

import SportPicture from '../../assets/images/sport-massage.jpg';

const Sport = () => {
  return (
    <section className="main">
      <h1 id="main-header">Sports Massage Therapy</h1>
      <div className="main-content">
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">There are many positive benefits to sports massage therapy!</p>
            <p className="text-block-text">It's not only relaxing, but massage prevents injury while maintaining the animal’s body.</p>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">There are also many other benefits which include:</p>
            <ul className="content-list">
              <li>1. Improves circulation which promotes more rapid recovery from and injury </li>
              <li>2. Relieves tension </li>
              <li>3. Eases muscle spasm </li>
              <li>4. Increases range of motion </li>
              <li>5. Enhances muscle tone </li>
              <li>6. Raises the athletic performance and endurance </li>
              <li>7. Helps the animal release toxins stored in the body </li>
              <li>8. And overall makes the animal much happier and more comfortable </li>
            </ul>
          </div>
          <img className="main-image wide" src={SportPicture} />
        </div>
      </div>
    </section>
  );
};

export default Sport;
