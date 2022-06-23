import React from 'react';
import PropTypes from 'prop-types';


const Masterpiece = () => (
  <div className='art'>
    <img src={process.env.PUBLIC_URL + '/images/Vincent Van Gogh. «Starry Night», 1889.jpg'} />
    <h3> Vincent Van Gogh. «Starry Night», 1889</h3>
  </div>
);

Masterpiece.propTypes = {};

Masterpiece.defaultProps = {};

export default Masterpiece;
