import Image from 'next/image';
import React from 'react';
import Button from './Button';
import classes from './Partner.module.css';
function InputContent({ title, pad }) {
  return (
    <div className={classes.inputcontent}>
      <label htmlFor='name'>{title}</label>
      <input type='text' style={{ padding: pad }} />
    </div>
  );
}
export default function Form() {
  return (
    <div className={classes.form}>
      <span className={classes.sp}>Contact</span>
      <h2>Get In Touch</h2>
      <section className={classes.formcontent}>
        <div className={classes.formcon}>
          <div className={classes.contacts}>
            <Image
              width={60}
              height={40}
              className={classes.icon}
              src='/images/phone.svg'
              alt=''
            />
            <div className={classes.contact}>
              <span>Tel</span>
              <br />
              <span>708-790-0000</span>
            </div>
          </div>
          <div className={classes.contacts}>
            <Image width={60} height={40} src='/images/mail.svg' alt='' />
            <div>
              <span>Email</span>
              <br />
              <span>sales@buildit.site</span>
            </div>
          </div>
          <div className={classes.contacts}>
            <Image width={60} height={40} src='/images/mail.svg' alt='' />
            <div>
              <span>Office</span>
              <br />
              <span>60 Manor Station St.</span>
            </div>
          </div>
        </div>
        <div className={classes.comp}>
          <div className={classes.comps}>
            <InputContent title='Name' />
            <InputContent title='Email' />
          </div>
          <InputContent title='Subject' />
          <InputContent title='Message' pad='40px' />
          <Button title='send Message' wid='100%' />
        </div>
      </section>
    </div>
  );
}
