import React from "react";
import Header from "./Header";
import ServiceList from "./ServiceList";
import WebDevelopment from './Servises/WebDevelopment';
import './Servises/WebDevelopment.css'
import './Servises/Design.css'
import Seo from "./Servises/Seo";
import './Servises/Seo.css'
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import WhyChooseUs from "./WhyChooseUs";
import Design from "./Servises/Desighn";
import './Service.css'
import  { useState } from 'react';


const ServiceListConatainer = ()=>{
    const [isHomeVisible, setHomeVisible] = useState(true);

    const toggleHomeVisibility = (isVisible) => {
      setHomeVisible(!isVisible);
    };
    return(
        <>  

            <div className="ServiceListConatainer">

                <Header toggleHomeVisibility={toggleHomeVisibility} />
                 {isHomeVisible && <ServiceList/>}
            </div>
            <div className="Service_gap">
                <h1>خدماتنا</h1>
            </div>
            <div className="servislist">
                <WebDevelopment />
                <Design/>
                <Seo/>

            </div>

            <div className="WhyChooseUs_Home">
                <WhyChooseUs/>


            </div>

            <div className="ContactUs_Home">
                <ContactUs/>


            </div>
            
            <Footer/>


        </>


        
    )
}

export default ServiceListConatainer