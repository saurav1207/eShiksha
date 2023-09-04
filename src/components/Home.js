import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      }, 1000);
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your Potential with eShiksha</h1>
          <p className="hero-description">Empowering Education for a Brighter Tomorrow</p>
        </div>
      </section>

      <section className="call-to-action">
        <div className="cta-content">
          <h2 className="cta-title">Welcome to our eShiksha Website!</h2>
          <p className="cta-description">Explore our courses and services to enhance your learning experience.</p>
          <Link to="/course" className="cta-button">Explore Courses</Link>
        </div>
      </section>

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
          {message && (
            <div className={`message ${validateEmail(email) ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
