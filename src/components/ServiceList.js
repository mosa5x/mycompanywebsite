import React from 'react';
import './Service.css'



const ServiceList = () => {
    return (
       <>
         <div className='ServiceList_p'   >
                <p>
                .نحن نؤمن بأن كل عمل يستحق تواجداً رقمياً مميزاً يعكس رؤيته وأهدافه
                </p>
                <p>
                  فريقنا من المطورين والمصممين المحترفين مستعد لتحويل أفكارك إلى واقع ملموس           
                </p>
                <p>
                    .من خلال حلول مبتكرة تلبي احتياجاتك الخاصة           
                </p>

                
                <button className="contact-button">
                    <a href="#contact">
                        تواصل معنا
                    </a>
                </button>
           </div>
            
       </>
    );
};

export default ServiceList