import React from 'react';
import classes from './Partner.module.css';
export default function Partner() {
  return (
    <div>
      <hr style={{ width: '70%' }} />
      <div className={classes.logo}>
        <img src='images/n.svg' alt='' />
        <img src='images/z.svg' alt='' />
        <img className={classes.two} src='images/tw.svg' alt='' />
        <img src='images/s.svg' alt='' />
        <img src='images/l.svg' alt='' />
      </div>
      <hr style={{ width: '70%' }} />
    </div>
  );
}
