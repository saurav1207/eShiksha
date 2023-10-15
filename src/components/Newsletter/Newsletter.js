import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setMessage('');
    };

    const handleSubscribe = () => {
        if (validateEmail(email)) {
            setMessage('Thank you for subscribing!');
            setEmail('');

            setTimeout(() => {
                setMessage('');
            }, 2000);
            setMessageType('success');
        } else {
            setMessage('Please enter a valid email address');
            setMessageType('error');
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <div className="newsletter-message">
                    <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
                    <p className="newsletter-description">
                        Stay updated with the latest educational news, course updates, and exclusive promotions.
                    </p>
                </div>
                <div className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button className="newsletter-button" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
                <div className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
                    {message}
                </div>
            </div>
        </section>
    )
};

export default Newsletter
