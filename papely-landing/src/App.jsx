// src/App.jsx
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import WhatsAppButton from './components/WhatsAppButton';
import GoldParticles from './components/GoldParticles';
import LuxuryCursor from './components/LuxuryCursor';
import logo from './assets/logo.Jpeg';

const App = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll para links internos
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute('href');
      if (hash === '#') return;
      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress" style={{ width: `${scrollWidth}%` }}></div>
      <GoldParticles />
      <LuxuryCursor />

      <header className="luxury-header">
        <div className="header-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Papelv Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-brand">Papely</span>
              <span className="logo-tag">Papelaria Personalizada</span>
            </div>
          </div>
          <nav className="luxury-nav">
            <a href="#hero" className="nav-link">Início</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#portfolio" className="nav-link">Portfólio</a>
            <a href="#testimonials" className="nav-link">Depoimentos</a>
            <a href="#cta" className="nav-link nav-cta">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>

      <footer className="luxury-footer">
        <div className="footer-content">
          <p>© 2023 Papely — Papelaria Personalizada de Luxo. Todos os direitos reservados.</p>
          <p className="footer-luxury">Feito com elegância e paixão pelo extraordinário.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;