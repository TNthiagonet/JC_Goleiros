import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react';
import animationMenuOpen from '../../Animations/MenuOpen.json';
import menuOpenSound from '../../Sounds/menu-open.mp3';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false); // Estado para controlar se o som foi reproduzido

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!soundPlayed) {
      playMenuSound(menuOpenSound, 0.5); // Exemplo: volume de 0.5 (50%)
      setSoundPlayed(true); // Marca que o som foi reproduzido
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Função para reproduzir o som com volume configurável e reiniciar o estado de soundPlayed
  const playMenuSound = (src: string, volume: number) => {
    const audio = new Audio(src);
    audio.volume = volume; // Configura o volume do áudio
    audio.play();
    setTimeout(() => {
      setSoundPlayed(false);
    }, 500); // Reinicia soundPlayed após 500ms (ajuste conforme necessário)
  };

  // Função para reiniciar soundPlayed quando a animação completa
  const handleAnimationComplete = () => {
    setSoundPlayed(false);
  };

  return (
    <header>
      <div className="header-content">
        <nav className="top-nav">
          <div className="left">
            <a href="#" className="logo-text">JC Goleiros</a>
          </div>
          <div className="center">
            {/* Conteúdo centralizado, se necessário */}
          </div>
          <div className="right">
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#home" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Home</a></li>
              <li><a href="#about" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Sobre</a></li>
              <li><a href="#services" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Serviços</a></li>
              <li><a href="#contact" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Contato</a></li>
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {/* Utiliza Lottie para animações de abertura e fechamento */}
              <Lottie
                animationData={mobileMenuOpen ? animationMenuOpen : animationMenuOpen}
                style={{ width: '40px', height: '40px' }} // Ajuste o tamanho conforme necessário
                onComplete={handleAnimationComplete} // Chama handleAnimationComplete quando a animação completa
              />
            </div>
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
