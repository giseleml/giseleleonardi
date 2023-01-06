import React from 'react';
import Header from './containers/Header';
import Photographs from './containers/Photographs';

import Styles from './index.css';

const App = () => {
  return (
    <>
      <Header />
      <Photographs />
      <p className={Styles.info}>
        Made with <span style={{ color: '#e25555' }}>&hearts;</span> by{' '}
        <a href="https://www.linkedin.com/in/gisele-leonardi-724245176/">me</a>{' '}
      </p>
    </>
  );
};

export default App;
