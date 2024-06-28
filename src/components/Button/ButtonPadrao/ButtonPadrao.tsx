import React from 'react';
import './ButtonPadrao.css';

interface ButtonPadraoProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonPadrao: React.FC<ButtonPadraoProps> = ({ children, onClick }) => {
  return (
    <button className="button-padrao" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPadrao;
