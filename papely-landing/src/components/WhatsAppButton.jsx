import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = "5565993046087";//Paley
    const message = "Olá! Vi o site de luxo da Papelv e gostaria de mais informações sobre os serviços personalizados.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button onClick={handleWhatsApp} className="whatsapp-float" aria-label="Fale conosco no WhatsApp">
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;