import React from 'react';
import classes from './Home.module.css';
export default function Inovation() {
  return (
    <div className={classes.home}>
      <h1>Innovative Execution</h1>
      <div className={classes.card}>
        <div>
          <img src='images/Icon.svg' alt='' />
          <h2>Featured Listing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div>
          <img src='images/Icon.svg' alt='' />
          <h2>Available Properties</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div>
          <img src='images/Icon.svg' alt='' />
          <h2>In the News</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  );
}
