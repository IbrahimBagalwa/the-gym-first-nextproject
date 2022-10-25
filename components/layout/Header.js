import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import Hero from '../Hero';
import classes from './Header.module.css';
export default function Header({ logo, titles }) {
  const { list1, list2, list3, list4 } = titles;
  return (
    <div className={classes.main}>
      <section className={classes.header}>
        <h1>
          <p></p>
          <Link href='/'>{logo}</Link>
        </h1>
        <ul>
          <li>
            <Link href='/about'>{list1}</Link>
          </li>
          <li>
            <Link href='/services'>{list2}</Link>
          </li>
          <li>
            <Link href='./project'>{list3}</Link>
          </li>
          <li>
            <Link href='./contact'>{list4}</Link>
          </li>
        </ul>
        <Button title='Need a Project?' />
      </section>
    </div>
  );
}
