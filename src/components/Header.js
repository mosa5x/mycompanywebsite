import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useRef } from 'react';


const Header = ({ toggleHomeVisibility }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    toggleHomeVisibility(navRef.current.classList.contains('responsive_nav'));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src='/image/quantum_transparent.png' alt="Quantum Logo" className="logo" />
        </Link>
      </div>
      <nav ref={navRef}>
        <ul>
          <li><Link to="/contactus">تواصل معنا</Link></li>
          <li><Link to="/services">خدماتنا</Link></li>
          <li><Link to="/">الرئيسية</Link></li>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
