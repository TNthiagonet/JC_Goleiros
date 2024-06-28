import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/Bola.json';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '70%', height: 'auto' }} />
      </div>
      <div className="about-content">
        <h1 className="about-title">Sobre</h1>
        <p className="about-description">
          A JC Goleiros é mais do que uma escolinha; é onde o amor pelo futebol se encontra com a disciplina e a técnica. Desde 2020, temos nutrido talentos, proporcionando não apenas habilidades técnicas robustas, mas também valores como trabalho em equipe, resiliência e dedicação ao esporte.
        </p>
        <p className="about-description2"></p>
        <p className="about-description2"></p>
      </div>
    </section>
  );
};

export default About;
