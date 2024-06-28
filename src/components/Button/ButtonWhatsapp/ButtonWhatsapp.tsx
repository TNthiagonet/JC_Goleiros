import React, { useState } from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '../../../Animations/Whatsapp.json';
import whatsappTnAnimation from '../../../Animations/Escanteio.json';
import './ButtonWhatsapp.css'; // Importe o arquivo CSS

interface AnimationData {
  // Defina a estrutura conforme necessário com base no conteúdo do arquivo JSON
}

const ButtonWhatsapp: React.FC = () => {
  const [animationData, setAnimationData] = useState<AnimationData>(whatsappAnimation);
  const [isSecondAnimation, setIsSecondAnimation] = useState<boolean>(false);

  const handleWhatsappClick = () => {
    setAnimationData(whatsappTnAnimation);
    setIsSecondAnimation(true);

    setTimeout(() => {
      setAnimationData(whatsappAnimation);
      setIsSecondAnimation(false);
    }, 2000);

    setTimeout(() => {
      window.open('https://wa.me/5583987315844', '_blank');
    }, 2000);
  };

  const containerClassName = isSecondAnimation ? 'button-whatsapp-container second-animation' : 'button-whatsapp-container';
  const animationClassName = 'button-whatsapp-animation';

  return (
    <div
      className={containerClassName}
      onClick={handleWhatsappClick}
    >
      <Lottie
        animationData={animationData}
        className={animationClassName}
      />
    </div>
  );
};

export default ButtonWhatsapp;
