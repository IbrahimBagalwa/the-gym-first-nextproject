import Image from 'next/image';
import React from 'react';
import classes from './Partner.module.css';
export default function Partner() {
  return (
    <div>
      <hr style={{ width: '70%' }} />
      <div className={classes.logo}>
        <Image src='images/n.svg' alt='' />
        <Image src='images/z.svg' alt='' />
        <Image className={classes.two} src='images/tw.svg' alt='' />
        <Image src='images/s.svg' alt='' />
        <Image src='images/l.svg' alt='' />
      </div>
      <hr style={{ width: '70%' }} />
    </div>
  );
}
