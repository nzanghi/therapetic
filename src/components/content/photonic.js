import React from 'react';

const Photonic = () => {
  return (
    <section className="main">
      <h1>Photonic Light Therapy</h1>
      <div className="main-content">
        <div className="content-block">
          <div className="text-block">
            <p>Therapetic Hands is very excited to announce the use of Photonic lights for both dogs and horses!</p>
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
          <p>Here are some more of the benefits of Photonic lights:</p>
          <ol>
            <li>Increases the release of endorphins</li>
            <li>Improves the strength of tendons and bones </li>
            <li>Releases tension from muscle spasms</li>
            <li>Increases circulation</li>
            <li>Strengthens the number of antibodies in the blood stream</li>
            <li>Increases cellular regeneration</li>
            <li>Treats skin fungus</li>
            <li>Reducing appearance of scars </li>
            <li>Decreases inflammation, and treats many other skin condit</li>
          </ol>
        </div>
        <div className="content-block">
          <span> Want to experience the power of Photonic lights? Call or send an email book an appointment!</span>
        </div>
      </div>
    </section>
  );
};

export default Photonic;
