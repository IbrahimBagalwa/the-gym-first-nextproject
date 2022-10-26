import React from 'react';
import styles from './Hero.module.css';
import Button from './Button';
import Image from 'next/image';
export default function Hero({ title, description, imgs, gradient }) {
  return (
    <section className={styles.hero}>
      <Image className={styles.gradient} src={gradient} />
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.btns}>
            <Button title='Services' />
            <Button title='About the company' bg='#c6dbff' color='#486a6f' />
          </div>
        </div>
        <div className={styles.images}>
          <Image src={imgs} />
        </div>
      </div>
    </section>
  );
}
