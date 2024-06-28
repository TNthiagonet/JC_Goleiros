// MobileMenu.tsx

import React from 'react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Função para fechar o menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose(); // Chamada para fechar o menu ao clicar em um item
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
      <ul>
        <li><a href="#home" onClick={handleClick}>Home</a></li>
        <li><a href="#about" onClick={handleClick}>Sobre</a></li>
        <li><a href="#services" onClick={handleClick}>Serviços</a></li>
        <li><a href="#contact" onClick={handleClick}>Contato</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
