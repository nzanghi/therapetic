import React from "react";

import padSystemPicture1 from "../../assets/images/pad-system/pad-system-1.JPG";
import padSystemPicture2 from "../../assets/images/pad-system/pad-system-3.JPG";

const PhotonicLightTherapySystem = () => {
  return (
    <section className="main">
      <h1 id="main-header">
        NEW SERVICE:&nbsp;Photonic Light Pain Free Pad System
      </h1>
      <div className="main-content">
        <div className="content-block">
          <div className="text-block">
            <p className="text-block-text">
              The Photonic Light Pain Free Pad System offers the same benefits
              as the handheld light services that I offer, but at a much more
              intense healing rate and the ability to cover more area. There are
              over over&nbsp;
              <strong>
                <u>70 different settings</u>
              </strong>
              &nbsp;to treat your furry loved ones!
            </p>
            <p className="text-block-text">
              This amazing system brings together the latest in technology to
              offer these benefits. Accelerated healing, reduction of
              inflammation, and many more benefits in an easy, quick, and simple
              to use system that your animal will be sure to love! Want to learn
              more? Please feel free to text or call today to schedule an
              appointment!
            </p>
          </div>
        </div>
        <div className="content-block">
          <img className="main-image wide" src={padSystemPicture1} />
          <img className="main-image wide" src={padSystemPicture2} />
        </div>
      </div>
    </section>
  );
};

export default PhotonicLightTherapySystem;
