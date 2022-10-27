import React from 'react';
import Footer from './Footer';
import Header from './Header';
import classes from '../../styles/Home.module.css';
export default function Layout({ children }) {
  const menus = {
    list1: 'About',
    list2: 'Services',
    list3: 'Projects',
    list4: 'contact',
  };
  return (
    <section className={classes.bod}>
      <Header logo='Buildit' titles={menus} />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
