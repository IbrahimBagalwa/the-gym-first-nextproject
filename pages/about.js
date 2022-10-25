import React from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';
import Partner from '../components/Partner';
import classes from '../components/Partner.module.css';
export default function About() {
  return (
    <>
      <div className='hero'>
        <div>
          <img className='img-p' src='images/h-1.svg' alt='' />
          <img className='img-s' src='images/h-2.svg' alt='' />
        </div>
        <div className='h-desc'>
          <span className='sp'>About us</span>
          <h1>Owner and investor with a reputation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
        </div>
      </div>
      <section className='statistics'>
        <span className='sp'>Statistics</span>
        <h2 className='dev'>Development in numbers</h2>
        <div className='stats'>
          <div className='stat'>
            <img className='stat-ico' src='images/st.svg' alt='' />
            <div className='detail'>
              <span>200</span>
              <br />
              <span>Number</span>
            </div>
          </div>
          <div className='stat'>
            <img className='stat-ico' src='images/st.svg' alt='' />
            <div className='detail'>
              <span>200</span>
              <br />
              <span>Number</span>
            </div>
          </div>
          <div className='stat'>
            <img className='stat-ico' src='images/st.svg' alt='' />
            <div>
              <span>200</span>
              <br />
              <span>Number</span>
            </div>
          </div>
        </div>
        <Partner />
      </section>
      <section className='mbr'>
        <span className='sp'>Our team</span>
        <h2 className='dev'>Let’s meet</h2>
        <div className='card-mbr'>
          <div className='mbr-ind'>
            <img src='images/mb.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb1.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb2.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb3.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb4.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb5.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb6.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb7.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
          <div className='mbr-ind'>
            <img src='images/mb8.svg' alt='' />
            <span className='user'>Name Surname</span>
            <span className='job'>Worker</span>
          </div>
        </div>
      </section>
      <div className='cll-us'>
        <hr style={{ width: '90%' }} />
        <section className='call-us'>
          <h2>Call us</h2>
          <div className='call-btn'>
            <Button title='Call' wid='10rem' />
            <Button title='Email' bg='#C6DBFF' />
          </div>
        </section>
        <hr style={{ width: '90%' }} />
      </div>
    </>
  );
}
