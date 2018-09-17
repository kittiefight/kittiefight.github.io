import React from 'react';
import PropTypes from 'prop-types';

const PROP_TYPES = {
  time: PropTypes.string.isRequired
};

const RotateElement = ({ time }) => (
  <div className="rotateElement">
    <div className="row mr-0">
      <div className="col-9 col-md-8 col-lg-7">
        <img src="img/polygon-active-png.png" />
        <div className="text1">Live Fights, coming soon.</div>
        <div className="text2"><a target="_blank" href="https://blog.superdao.io">See latest update on blog</a></div>
      </div>
      <div className="col-3 col-md-4 col-lg-5">
        <img src="img/invalid-name.png" />
        <span className="shortClock">{time}</span>
      </div>
    </div>
  </div>
);

RotateElement.propTypes = PROP_TYPES;

export default RotateElement;
