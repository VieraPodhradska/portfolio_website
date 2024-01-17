import React from 'react';

import { Route, Routes, BrowserRouter} from 'react-router-dom';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';
import Redirect from './components/Redirect';
import Certificates from './components/Certificates';

const App = () => {
  return (
    <div>

      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Services />
      <Skills />
      <Certificates />
      <Skills />
      <Contact />
      <Skills />
      <Footer />
      <ToTopButton />

    </div>
  );
};

export default App;
