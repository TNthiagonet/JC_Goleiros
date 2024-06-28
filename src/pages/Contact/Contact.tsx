// Contact.tsx

import React from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationMail.json';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:juancost10@gmail.com'; // Substitua pelo seu email
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5583987315844'; // Substitua pelo seu número de telefone
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contato</h1>
          <p>Se preferir, entre em contato por email ou telefone.</p>
        </div>
        <div className="contact-animations">
          <Lottie animationData={animationData} loop autoplay style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="contact-icons">
          <MdEmail onClick={handleEmailClick} className="contact-icon" size={40} />
          <FaPhoneAlt onClick={handlePhoneClick} className="contact-icon" size={40} />
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="contact-icon" size={40} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="contact-icon" size={40} />
          </a>
          <a href="https://www.instagram.com/jcgoleiros" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="contact-icon" size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
