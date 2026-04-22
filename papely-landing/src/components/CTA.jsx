import React from 'react';

const CTA = () => {
  const openWhatsApp = () => {
    const phone = "5511999999999";
    const message = "Olá, Papelv! Gostaria de solicitar um orçamento de luxo para minha papelaria personalizada.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-content">
        <h2>Vamos criar algo memorável?</h2>
        <p>Sua história merece ser escrita em papéis que encantam. Fale com nossa equipe de criação.</p>
        <button onClick={openWhatsApp} className="cta-button">Falar com um especialista</button>
      </div>
    </section>
  );
};

export default CTA;