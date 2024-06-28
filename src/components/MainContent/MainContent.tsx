import React from 'react';
import './MainContent.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Contact from '../../pages/Contact/Contact';

const MainContent: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default MainContent;
