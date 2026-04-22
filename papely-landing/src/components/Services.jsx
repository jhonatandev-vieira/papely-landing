import React, { useRef } from 'react';
import { FaCrown, FaFeatherAlt, FaGift, FaRegGem } from 'react-icons/fa';

const servicesData = [
  { icon: <FaCrown />, title: "Design Exclusivo", description: "Criações únicas assinadas por designers especializados em alta papelaria." },
  { icon: <FaFeatherAlt />, title: "Acabamentos Premium", description: "Hot stamping, gravação a ouro, relevos e texturas sensoriais." },
  { icon: <FaRegGem />, title: "Papéis Raros", description: "Seleção de fibras nobres, algodão e texturas importadas." },
  { icon: <FaGift />, title: "Embalagens de Luxo", description: "Caixas, envelopes e laços que elevam a experiência do presente." }
];

const Services = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    if (card) card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>Serviços Extraordinários</h2>
        <p className="section-subtitle">Uma jornada sensorial onde o papel encontra a arte e a sofisticação.</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;