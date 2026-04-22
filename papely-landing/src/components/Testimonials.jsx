import React, { useRef } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  { name: "Isabella Rocha", text: "O convite de casamento da Papelv superou todas as expectativas. Cada detalhe respira luxo e requinte. Nossos convidados ficaram maravilhados!", stars: 5 },
  { name: "Dr. Henrique Alencar", text: "Contratei para minha campanha institucional e o resultado foi impecável. Papel texturizado, douramento perfeito. Uma gráfica à altura de marcas premium.", stars: 5 },
  { name: "Clara Monteiro", text: "Desde o atendimento até a entrega, tudo extraordinário. O cuidado com a embalagem e a personalização me fizeram cliente fiel.", stars: 5 }
];

const Testimonials = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    if (card) card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <h2>O que dizem sobre nós</h2>
        <p className="section-subtitle">Vozes que consagram nossa paixão pelo papel de excelência.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="testimonial-card"
          >
            <div className="testimonial-stars">
              {[...Array(Math.floor(item.stars))].map((_, i) => <FaStar key={i} />)}
              {item.stars % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
            <div className="testimonial-author">— {item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;