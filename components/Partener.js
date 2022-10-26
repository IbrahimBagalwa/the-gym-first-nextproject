import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Form from './Form';
import Partner from './Partner';
import classes from './Partner.module.css';
export default function Partener() {
  return (
    <>
      <section className={classes.partner}>
        <Partner />
        <div className={classes.content}>
          <Image src='images/oto.svg' alt='' />
          <div>
            <span>About us</span>
            <h2>Owner and investor with a reputation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
            <Button title='Explore' />
          </div>
        </div>
        <section className={classes.feature}>
          <div className={classes.content}>
            <div>
              <span>Available Properties</span>
              <h2>Featured Listing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
              <Button title='Explore' />
            </div>
            <section className={classes.card}>
              <Image src='images/images.PNG' alt='' />
            </section>
          </div>
        </section>
        <section className={classes.imgscontent}>
          <span>Socials</span>
          <h2>On Instagram</h2>
          <div className={classes.imgs}>
            <Image src='images/c1.svg' alt='' />
            <Image src='images/c2.svg' alt='' />
            <Image src='images/c3.svg' alt='' />
            <Image src='images/c4.svg' alt='' />
            <Image src='images/c5.svg' alt='' />
            <Image src='images/c6.svg' alt='' />
          </div>
        </section>
      </section>
      <Form />
    </>
  );
}
