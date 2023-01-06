import React from 'react';
import Styles from './index.css';

import Photo from '../../components/Photo';

const Photographs = () => {
  const content = [
    {
      title: 'About Me',
      text: `I'm a brazilian dev who loves coding! I'm a great team-worker but also can guide myself. I love music, movies and games. I like playing the bass (altough badly) and I'm a skincare enthusiast. Let's share our routines!`,
      idx: 1,
      color: 'purple',
      icons: false,
    },
    {
      title: 'Skills',
      text: `2,5 years of experience in front/back end, devOps,
      writing clean code, testing and code reviewing.
      [React, Redux, NextJS, NodeJS, MongoDB, Kubernetes, AWS, Docker, Jest]`,
      color: 'red',
      idx: 2,
      icons: false,
    },
    {
      title: 'Contact',
      text: '',
      color: '#2c630c',
      idx: 3,
      icons: true,
    },
  ];

  return (
    <div className={Styles.wrapper}>
      {content.map(c => (
        <div className={Styles.polaroid} key={c.idx}>
          <Photo color={c.color} text={c.text} icons={c.icons} />
          {c.title}
        </div>
      ))}
    </div>
  );
};

export default Photographs;
