import React from 'react';

const Footer = () => {
  return (
    <div className="mb-9 flex items-center"> {/* Add flex and items-center classes */}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mr-4"> {/* Add margin-right class */}
        TDA830 - Digitalization and AI in practice
      </h2>
      <img src="./images/chalmers.png" alt="chalmers-logo" className="h-12" /> {/* Adjust image height */}
    </div>
  );
};

export default Footer;