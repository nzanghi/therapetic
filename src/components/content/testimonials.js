import React from 'react';

const Testimonials = () => {
  return (
    <section className="main">
      <h1 id="main-header">Testimonials</h1>
      <div className="testimonial-container">
        <div className="testimonial">
          <p className="centered">5 stars</p>
          <p className="testimonial-text">
            "My horse just got his first ever massage and he absolutely loved it! Massage combined with the red light therapy made all of
            his back pain disappear! Nicole did an absolutely amazing job, and was more than happy to answer all of my questions! I would
            recommend her to anyone!"
          </p>
          <p className="name-bottom">-Emily</p>
        </div>
        <div className="testimonial">
          <p className="centered">5 stars</p>
          <p className="testimonial-text">
            "Nicole has been treating my English bulldog, Molly, for a few months now. She has an injury to her back and with massage and
            red light therapy there is a significant difference. I absolutely recommend Nicole whether your pet has an injury or just needs
            some pampering!"
          </p>
          <p className="name-bottom">-Syndi</p>
        </div>
        <div className="testimonial">
          <p className="centered">5 stars</p>
          <p className="testimonial-text">
            "My horse Azor responded immediately to the light therapy, and Nicole's touch. I was a little skeptical at first, but my
            normally pushy/fidgety young gelding let both of us know he was in heaven!"
          </p>
          <p className="name-bottom">-Rusty</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
