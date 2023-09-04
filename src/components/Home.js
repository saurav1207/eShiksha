import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your Potential</h1>
          <p className="hero-description">Explore a world of knowledge with eShiksha's online courses.</p>
        </div>
      </section>


      <section className="call-to-action">
        <div className="cta-content">
          <h2 className="cta-title">All the knowledge you seek is right here. <br></br> Explore, learn, and watch the transformation within yourself.</h2>
          <p className="cta-description">Join E-Shiksha today and embark on a journey of knowledge and discovery.</p>
          <Link to="/course" className="cta-button">Explore Courses</Link>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-message">
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-description">Stay updated with the latest educational news, course updates, and exclusive promotions.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
