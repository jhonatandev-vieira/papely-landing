// src/components/Hero.jsx
import React from 'react';
import heroPhoto from '../assets/hero-image.png';

const Hero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">DESDE 2023 · ALTA COSTURA PAPEL</span>
          <h1 className="hero-title">Arte em cada fibra,<br />luxo em cada detalhe</h1>
          <p className="hero-sub">Papelaria personalizada extraordinária para momentos que merecem eternidade.</p>
          <button onClick={scrollToCTA} className="hero-btn">Solicitar uma obra-prima</button>
        </div>
        <div className="hero-image">
          <div className="luxury-mockup">
            <img 
              src={heroPhoto} 
              alt="Papelaria de luxo"
              className="mockup-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;