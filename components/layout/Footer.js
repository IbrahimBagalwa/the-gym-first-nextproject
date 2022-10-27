import React from 'react';
import classes from './Footer.module.css';
export default function Footer() {
  return (
    <section className={classes.footer}>
      <div>
        <ul>
          <li className={classes.logo}>Buildit</li>
          <li>Development company 2022</li>
        </ul>
        <ul className={classes.contact}>
          <li>Site design – ⏰ Alarm</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
        </ul>
        <div className={classes.social}>
          <img src='images/Button (1).png' alt='' />
          <img src='images/Button.png' alt='' />
        </div>
      </div>
      <div>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Get in touch</li>
          <li>60 Manor Station St. Fairport,</li>
          <li>NY 14450</li>
        </ul>
        <ul className={classes.contact}>
          <li>708-790-0000</li>
          <li>sales@buildit.site</li>
        </ul>
      </div>
    </section>
  );
}
