import React, { useState } from 'react';
import Home from './Home';
import Header from './Header';
import WhyChooseUs from './WhyChooseUs';
import WhyNeedWebsite from './WhyNeedWebsite';
import ContactUs from './ContactUs';
import SuccessStories from './SuccessStories';
import WebDevelopment from './Servises/WebDevelopment';
import Seo from './Servises/Seo';
import Design from './Servises/Desighn';
import Footer from './Footer';
import LogoTape from './LogoTape';
import './Home.css';
import './LogoTape.css'
import './Footer.css';
import './Header.css';
import './ContactUs.css';
import './SuccessStories.css';
import './WhyNeedWebsite.css';
import './WhyChooseUs.css';
import './Service.css';
import './HomeContainer.css';
const HomeContainer = () => {
  const [isHomeVisible, setHomeVisible] = useState(true);

  const toggleHomeVisibility = (isVisible) => {
    setHomeVisible(!isVisible);
  };

  return (
    <>
      <div className="HomeContainer">
        <Header toggleHomeVisibility={toggleHomeVisibility} />
        {isHomeVisible && <Home />}
      </div>

      <div className="WhyChooseUs_Home">
        <WhyChooseUs />
      </div>
      <div className="Service_gap">
        <h1>خدماتنا</h1>
      </div>
      <div className="servislist">
        <WebDevelopment />
        <Design />
        <Seo />
      </div>
      <div className="WhyNeedWebsite_Home">
        <WhyNeedWebsite />
      </div>

      <div className="LogoTape_Home">
        <LogoTape />
      </div>


      <div className="SuccessStories_Home">
        <SuccessStories />
      </div>
      <div className="ContactUs_Home">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default HomeContainer;
