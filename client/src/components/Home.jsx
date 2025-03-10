import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import Footer from './Footer';
import New from './New';


const Home = () => {
  

  return (
    <div className='bg-white'>
     
        <>
          <Navigation />
          <Hero />
          <New />
          <Footer />
        </>
     
    </div>
  );
};

export default Home;
