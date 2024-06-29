import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react';
import animationMenuOpen from '../../Animations/MenuOpen.json';
import animationMenuClose from '../../Animations/MenuClose.json';
import menuOpenSound from '../../Sounds/menu-open.mp3';
import logoImage from '../../img/JC.png';
import logoHoverSound from '../../Sounds/ItensHover.mp3'; // Importe o som ItensHover aqui

type AnimationData = any;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [animationData, setAnimationData] = useState<AnimationData>(animationMenuOpen);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!soundPlayed) {
      playMenuSound(menuOpenSound, 0.5);
      setSoundPlayed(true);
    }
    setAnimationData(mobileMenuOpen ? animationMenuOpen : animationMenuClose);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAnimationData(animationMenuOpen);
  };

  const playMenuSound = (src: string, volume: number) => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
    setTimeout(() => {
      setSoundPlayed(false);
    }, 500);
  };

  const handleAnimationComplete = () => {
    setSoundPlayed(false);
  };

  // Função para reproduzir som ao fazer hover apenas nas logos
  const playLogoHoverSound = () => {
    const audio = new Audio(logoHoverSound);
    audio.volume = 0.5; // Volume ajustável conforme necessário
    audio.play();
  };

  return (
    <header>
      <div className="header-content">
        <nav className="top-nav">
          <div className="left">
            <a href="#" className="logo-text" onMouseEnter={playLogoHoverSound}>
              <img src={logoImage} alt="JC Goleiros Logo" className="logo-image" />
              JC Goleiros
            </a>
          </div>
          <div className="center">
            {/* Conteúdo centralizado, se necessário */}
          </div>
          <div className="right">
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#home" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Sobre</a>
              </li>
              <li>
                <a href="#services" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Serviços</a>
              </li>
              <li>
                <a href="#contact" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Contato</a>
              </li>
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <Lottie
                animationData={animationData}
                style={{ width: '40px', height: '40px' }}
                onComplete={handleAnimationComplete}
                onMouseEnter={() => { if (!mobileMenuOpen) playLogoHoverSound(); }} // Executa playLogoHoverSound apenas se o menu estiver fechado
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
