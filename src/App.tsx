// Arquivo: src/App.tsx

import React from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SideMenu position="left" />
      <SideMenu position="right" />
      <MainContent />
      <Footer />
      <ButtonWhatsapp />
    </div>
  );
};

export default App;
