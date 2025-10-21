import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Size enum with custom border radius
const WhatsAppButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium', 
  LARGE: 'large',
  XL: 'xl',
  XXL: 'xxl'
};

const WhatsAppButton = ({ size = WhatsAppButtonSize.LARGE }) => {
  const whatsappLink = "https://wa.me/918015285690";

  // Size configuration with custom border radius
  const sizeConfig = {
    [WhatsAppButtonSize.SMALL]: {
      button: 'w-12 h-12',
      icon: 20,
      tooltip: 'text-xs',
      borderRadius: 'rounded-[20px]' // Custom border radius
    },
    [WhatsAppButtonSize.MEDIUM]: {
      button: 'w-14 h-14',
      icon: 24,
      tooltip: 'text-sm',
      borderRadius: 'rounded-[25px]' // Custom border radius
    },
    [WhatsAppButtonSize.LARGE]: {
      button: 'w-16 h-16',
      icon: 28,
      tooltip: 'text-base',
      borderRadius: 'rounded-[30px]' // Custom border radius
    },
    [WhatsAppButtonSize.XL]: {
      button: 'w-20 h-20',
      icon: 32,
      tooltip: 'text-lg',
      borderRadius: 'rounded-[35px]' // Custom border radius
    },
    [WhatsAppButtonSize.XXL]: {
      button: 'w-24 h-24',
      icon: 36,
      tooltip: 'text-xl',
      borderRadius: 'rounded-[40px]' // Custom border radius
    }
  };

  const { 
    button: buttonSize, 
    icon: iconSize, 
    tooltip: tooltipSize, 
    borderRadius 
  } = sizeConfig[size];

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white ${buttonSize} ${borderRadius} shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-110 z-40 flex items-center justify-center group`}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp 
        size={iconSize} 
        className="group-hover:scale-110 transition-transform duration-300" 
      />
      <span className={`absolute -top-10 bg-green-500 text-white ${tooltipSize} px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
export { WhatsAppButtonSize };