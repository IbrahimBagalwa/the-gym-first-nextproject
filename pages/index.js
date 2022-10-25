import React from 'react';
import Hero from '../components/Hero';
import Inovation from '../components/Inovation';
import Partener from '../components/Partener';
export default function Home() {
  return (
    <>
      <div>
        <Hero
          title='Development company'
          gradient='images/Figure.png'
          description='Forward-thinking real estate developer, owner and investor with a
            reputation'
          imgs='images/Photos.png'
        />
      </div>
      <Inovation />
      <Partener />
    </>
  );
}
