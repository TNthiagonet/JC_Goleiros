// Arquivo: src/components/Footer/Footer.tsx

import React, { useEffect, useState } from 'react';
import './Footer.css';
import jcGoleirosHoverSound from '../../Sounds/JC_Goleiros.mp3'; // Som para JC Goleiros
import thiagoNETHoverSound from '../../Sounds/ThiagoNET.mp3'; // Som para thiagonet.com

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  useEffect(() => {
    function handleScroll() {
      // Verifica se o usuário está no final da página
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isBottom);
    }

    // Adiciona um event listener para o scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para reproduzir o som ao passar o mouse sobre "JC Goleiros"
  const playJCGoleirosHoverSound = () => {
    const audio = new Audio(jcGoleirosHoverSound);
    audio.volume = 0.5; // Ajuste o volume conforme necessário
    audio.play();
  };

  // Função para reproduzir o som ao passar o mouse sobre "thiagonet.com"
  const playThiagoNETHoverSound = () => {
    const audio = new Audio(thiagoNETHoverSound);
    audio.volume = 0.5; // Ajuste o volume conforme necessário
    audio.play();
  };

  // Função para encapsular a lógica de reprodução de som com verificação e pausa de áudio anterior se estiver em execução
  const playSoundWithCheck = (audioSrc: string, volume: number) => {
    const audio = new Audio(audioSrc);
    audio.volume = volume;

    // Verifica se há algum áudio em reprodução e pausa antes de iniciar o novo som
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio.play();
  };

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <p>&copy; {currentYear} <a className="thiagonet" onMouseEnter={() => playSoundWithCheck(jcGoleirosHoverSound, 0.5)}>JC Goleiros | </a>developer<a href="https://thiagonet.com" className="thiagonet" onMouseEnter={() => playSoundWithCheck(thiagoNETHoverSound, 0.5)}> thiagonet.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
