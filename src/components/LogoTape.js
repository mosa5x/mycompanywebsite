import React from 'react';
import './LogoTape.css';




const LogoTape = () => {
    const logos = [
        { src: '/image/angazny-white-logo.png', alt: 'Company 1' },
        { src: '/image/boss-logo-copy.png', alt: 'Company 2' },
        { src: '/image/white-png-150x150.png', alt: 'Company 4' },
        { src: '/image/Vivra-Logo-768x221.png', alt: 'Company 5' },
        { src: '/image/Untitled-design-e1699432537226.png', alt: 'Company 6' },
        { src: 'image/Untitled-design-2023-08-14T170913.840-qb3e0c0wp8jgz2kv5amby5pg536ct5hk5e7689xlh6.webp', alt: 'Company 7' },
        { src: '/image/tawla-last-logo-1.png', alt: 'Company 8' },
        { src: '/image/logo.png', alt: 'Company 10' },
        { src: '/image/Group-313.webp', alt: 'Company 12' },
        { src: '/image/Group-2.png', alt: 'Company 13' },


      ];
  return (
    <div className="logo-tape">
      <div className="logo-tape-content">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default LogoTape;
