import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.css';

import github from './images/github.svg';
import email from './images/email.svg';
import codeFolder from './images/code.png';
import twitter from './images/twitter.svg';

const Photo = ({ text, color, icons }) => (
  <div style={{ backgroundColor: color }} className={Styles.photo}>
    {!icons && <p>{text}</p>}
    {icons && (
      <div className={Styles.imageContainer}>
        <p>{text}</p>
        <a
          href="mailto:giselemaraleo@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="email" src={email} />
        </a>
        <a href="https://codepen.io/giseleml" target="_blank" rel="noreferrer">
          <img alt="codepen" src={codeFolder} />
        </a>
        <a href="https://github.com/giseleml" target="_blank" rel="noreferrer">
          <img alt="github" src={github} />
        </a>
        <a
          href="https://twitter.com/leonardigi"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter" src={twitter} />
        </a>
      </div>
    )}
  </div>
);

Photo.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  icons: PropTypes.bool,
};

export default Photo;
