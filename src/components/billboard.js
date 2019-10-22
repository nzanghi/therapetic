import React from 'react';

import featured from '../assets/images/behind-logo.jpg';

/**
 * On pc should have three pictures separated flex with space-between
 * On Mobile should only see the featured image
 */
const Billboard = () => {
  return (
    <div className="featured-image-container">
      <img id="featured-image" src={featured} />
    </div>
  );
};

export default Billboard;
