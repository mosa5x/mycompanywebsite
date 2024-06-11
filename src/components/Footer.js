import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Import the CSS file for styling

const Footer = () => {
    return (
        <div className="footer">
            <div className="container_footer">
                <div className="footer-logo">
                    <img src='/image/quantum_transparent.png' alt="Quantum Logo" className="logo" />
                </div>
                <div className='container_footer_div'>
                        <div className="footer-links">
                            <ul>
                                <li><Link to="/">الرئيسية</Link></li>
                                <li><Link to="/services">خدماتنا</Link></li>
                                <li><Link to="/contact">تواصل معنا</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <p>الهاتف: 07735875881</p>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Footer;
