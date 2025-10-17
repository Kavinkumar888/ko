import React from "react";
import whatsappLogo from "../assets/watsapplogo.png"; // ✅ correct path

const WhatsAppButton = () => {
  const phoneNumber = "918015285690";
  const message =
    "Hello! I'm interested in ordering food from Ennakku Foods. Can you help me with the menu?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] hover:bg-[#20ba5a] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-8 h-8 object-contain relative z-10"
        />

        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1">
            <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>

        {/* Ping Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></div>
      </a>

      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 bg-[#FF3B30] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-md border-2 border-white">
        <span className="font-bold">!</span>
      </div>
    </div>
  );
};

export default WhatsAppButton;
