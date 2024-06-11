import React from "react";
import Home from "./Home";
import Header from "./Header";
import WhyChooseUs from "./WhyChooseUs";
import WhyNeedWebsite from "./WhyNeedWebsite";
import ContactUs from "./ContactUs";
import SuccessStories from "./SuccessStories";
import WebDevelopment from './Servises/WebDevelopment';
import './Servises/WebDevelopment.css'
import './Servises/Design.css'
import Seo from "./Servises/Seo";
import './Servises/Seo.css'
import Design from "./Servises/Desighn";
import Footer from "./Footer";
import './Header.css'
import  { useState } from 'react';
const Contactuscontainer = ()=>{
    const [isHomeVisible, setHomeVisible] = useState(true);

    const toggleHomeVisibility = (isVisible) => {
        setHomeVisible(!isVisible);
  };

    
    return(
        <>
            <div className="contactus_Header">
            <Header toggleHomeVisibility={toggleHomeVisibility} />
            </div>

            <div className="ContactUs_Home">
                <ContactUs/>


            </div>
            
            <Footer/>


        </>



    )
}

export default Contactuscontainer