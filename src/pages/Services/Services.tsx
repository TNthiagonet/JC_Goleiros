import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AgarraEssa.json';

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services-header">
        <h1>Serviços</h1>
      </div>
      <div className="services-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="services-header-p">
        <p>
        Nossos serviços são projetados para oferecer treinamento completo <br /> 
        e personalizado para goleiros de todas as idades e níveis de habilidade. <br />
        Oferecemos sessões individuais, trabalho em grupo, análise de vídeo, <br />
        preparação física e mental, tudo adaptado às necessidades de cada goleiro.
        </p>
      </div>
    </section>
  );
};

export default Services;
