import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.css';

const Photo = ({ text, color }) => {
  return (
    <div style={{ backgroundColor: color }} className={Styles.photo}>
      <p>{text}</p>
    </div>
  );
};

Photo.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Photo;
