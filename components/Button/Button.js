import React from 'react';
import classes from './Button.module.css';
export default function Button({ title, bg, color, wid }) {
  return (
    <button
      className={classes.btn}
      style={{ background: bg, color: color, width: wid }}
    >
      {title}
    </button>
  );
}
