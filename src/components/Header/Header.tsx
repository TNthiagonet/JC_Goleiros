import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react'; // Importa Lottie para integrar animações JSON

// Importe a animação JSON desejada (substitua 'animationMenuOpen.json' pelo seu arquivo JSON)
import animationMenuOpen from '../../Animations/MenuOpen.json';
import animationMenuClose from '../../Animations/MenuClose.json';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false); // Função para fechar o menu
  };

  return (
    <header>
      <div className="header-content">
        <nav className="top-nav">
          <div className="left">
            <a href="#" className="logo-text">JC Goleiros</a> {/* Link centralizado */}
          </div>
          <div className="center">
            {/* Aqui pode adicionar conteúdo centralizado, se necessário */}
          </div>
          <div className="right">
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#services" onClick={closeMenu}>Serviços</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {/* Substitui '✕' e '☰' por animações JSON */}
              <Lottie
                animationData={mobileMenuOpen ? animationMenuClose : animationMenuOpen}
                style={{ width: '40px', height: '40px' }} // Ajuste o tamanho conforme necessário
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
