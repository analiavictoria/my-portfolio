'use client';

import React, { useState } from 'react';

const FPFCertification = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleCertification = () => {
    window.open('https://drive.google.com/file/d/1DQKu1scTSg1ornkhXk60WK0SGiRIC_W5/view?usp=sharing');
  };

  return (
    <div className="relative group">
      <a
        className="cursor-pointer underline text-coolGray-500 font-medium mt-2 relative z-10"
        onClick={handleCertification}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        Programador Web
      </a>
      {isTooltipVisible && (
        <div className="absolute bg-pink-400 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap shadow-lg top-full left-1/2 transform -translate-x-1/2 opacity-100 pointer-events-auto transition-opacity duration-300">
          Clique para conferir o meu certificado!
        </div>
      )}
    </div>
  );
};

export default FPFCertification;
