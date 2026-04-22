import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
// IMPORTE SUAS FOTOS REAIS (ajuste os nomes)
import foto1 from '../assets/papelv-foto1.jpeg';
import foto2 from '../assets/papelv-foto2.jpeg';
import foto3 from '../assets/papelv-foto3.jpeg';

const images = [
  { 
    src: foto1, 
    title: 'Xícara Personalizada - Presente Exclusivo' 
  },
  { 
    src: foto2, 
    title: 'Adesivo Personalizado - Ilustração de Pessoas' 
  },
  { 
    src: foto3, 
    title: 'Mini Bloco Personalizado - Tema Gestante' 
  },
];

const Portfolio = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h2>Obras de Arte em Papel</h2>
        <p className="section-subtitle">Nossas criações reais – arte, elegância e exclusividade.</p>
      </div>
      <div className="portfolio-grid">
        {images.map((img, idx) => (
          <div key={idx} className="portfolio-item" onClick={() => setLightbox(idx)}>
            <img src={img.src} alt={img.title} />
            <div className="portfolio-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <FaTimes className="lightbox-close" />
          <img src={images[lightbox].src} alt={images[lightbox].title} />
          <p>{images[lightbox].title}</p>
        </div>
      )}
    </section>
  );
};

export default Portfolio;