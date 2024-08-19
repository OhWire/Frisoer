import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Footer from "./components/Footer/Footer"
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example images

import Hero from './components/Hero/Hero';
import Preise from './components/Preise/Preise';
import Contact from './components/Contact/Contact';

const App = () => {
  

  return (
    <div className='flex flex-col w-full h-full overflow-x-hidden'>
      <section id='home'>
        <Hero/>
      </section>
      <section id='gallery'>
        <Gallery/>
      </section>
      <section id='preise'>
      <Preise/>
      </section>
      <section id='contact'>
       <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
