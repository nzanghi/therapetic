import React from 'react';

import photonicPic from '../../assets/images/massage-pics/photonic-massage.JPG';

const Photonic = () => {
  return (
    <section className="main">
      <h1 id="main-header">Photonic Light Therapy</h1>
      <div className="main-content">
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">
              Photonic lights are safe and noninvasive (little to no heat is released, and it is not a laser, but rather an LED light).
              There are two available settings, the blue light and the red light.
            </p>
            <p className="text-block-text">
              The red light is used to treat deep rooted issues, such as tendons, muscles, injuries, and ligaments. Whereas the blue light
              (also know as the “ice in a light”) is used to treat skin conditions, funguses and superficial growths.
            </p>
          </div>
        </div>
        <div className="content-block">
          <img className="main-image shorter" src={photonicPic} />
          <div className="text-block">
            <p className="text-block-text">Here are some more of the benefits of Photonic lights:</p>
            <ul className="content-list">
              <li>1. Increases the release of endorphins</li>
              <li>2. Improves the strength of tendons and bones </li>
              <li>3. Releases tension from muscle spasms</li>
              <li>4. Increases circulation</li>
              <li>5. Strengthens the number of antibodies in the blood stream</li>
              <li>6. Increases cellular regeneration</li>
              <li>7. Treats skin fungus</li>
              <li>8. Reducing appearance of scars </li>
              <li>9. Decreases inflammation, and treats many other skin conditons</li>
            </ul>
          </div>
        </div>
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">Want to experience the power of Photonic lights? Call or send an email book an appointment!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photonic;
