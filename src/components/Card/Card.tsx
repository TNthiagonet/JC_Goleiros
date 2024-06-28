// Arquivo: src/components/Card/Card.tsx

import React from 'react';
import './Card.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  buttonLabel,
  buttonUrl,
  className,
  id,
  style,
  onClick,
}) => {
  return (
    <div className={`card ${className}`} style={style} id={id} onClick={onClick}>
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={buttonUrl} target={"_blank"} className="card-button">{buttonLabel}</a>
      
      </div>
    </div>
  );
};

export default Card;
