import React, { useRef } from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Lottie from 'lottie-react';
import animationData from '../../Animations/Email.json';
import emailHoverSound from '../../Sounds/Email.mp3'; // Som de Email.mp3
import telefoneHoverSound from '../../Sounds/Telefone.mp3'; // Som de Telefone.mp3
import facebookHoverSound from '../../Sounds/Facebook.mp3'; // Som de Facebook.mp3
import twitterHoverSound from '../../Sounds/Twitter.mp3'; // Som de Twitter.mp3
import instagramHoverSound from '../../Sounds/Instagram.mp3'; // Som de Instagram.mp3

const Contact: React.FC = () => {
  const emailRef = useRef<HTMLDivElement>(null);
  const telefoneRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLAnchorElement>(null);
  const twitterRef = useRef<HTMLAnchorElement>(null);
  const instagramRef = useRef<HTMLAnchorElement>(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:juancost10@gmail.com';
  };

  const handleHoverSound = (sound: string, ref: React.RefObject<any>) => {
    if (ref.current) {
      const audio = new Audio(sound);
      audio.volume = 0.5; // Ajuste o volume conforme necessário
      audio.play();
      ref.current.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5583987315844';
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contato</h1>
          <p>Entre em contato por whatsapp, email, telefone, facebook, twitter ou instagram.</p>
        </div>
        <div className="contact-animations">
          <Lottie animationData={animationData} loop autoplay style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="contact-icons">
          <div
            onClick={handleEmailClick}
            onMouseEnter={() => handleHoverSound(emailHoverSound, emailRef)} // Som ao passar o mouse sobre o ícone de Email
            className="contact-icon"
            ref={emailRef}
          >
            <MdEmail size={40} />
          </div>
          <div
            onClick={handlePhoneClick}
            onMouseEnter={() => handleHoverSound(telefoneHoverSound, telefoneRef)} // Som ao passar o mouse sobre o ícone de Telefone
            className="contact-icon"
            ref={telefoneRef}
          >
            <FaPhoneAlt size={40} />
          </div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(facebookHoverSound, facebookRef)} // Som ao passar o mouse sobre o ícone de Facebook
            ref={facebookRef}
          >
            <FaFacebook className="contact-icon" size={40} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(twitterHoverSound, twitterRef)} // Som ao passar o mouse sobre o ícone de Twitter
            ref={twitterRef}
          >
            <FaTwitter className="contact-icon" size={40} />
          </a>
          <a
            href="https://www.instagram.com/jcgoleiros"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(instagramHoverSound, instagramRef)} // Som ao passar o mouse sobre o ícone de Instagram
            ref={instagramRef}
          >
            <FaInstagram className="contact-icon" size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
