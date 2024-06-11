import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };
    

    return (
        <section id="contact-us">
            <div className="container">
                {isSubmitted ? (
                    <div className="thank-you-message">
                        <h2>شكرا لك، لقد تم استلام رسالتك!</h2>
                    </div>
                ) : (
                    <>
                        <h2>اتصل بنا</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">الاسم:</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">البريد الإلكتروني:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">الرسالة:</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <button type="submit">إرسال</button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
};

export default ContactUs;
