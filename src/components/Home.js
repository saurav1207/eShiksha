import React from 'react';
import '../styles/Home.css';
import CallToAction from './CallToAction';
import Opportunities from './Opportunities';
import Newsletter from './Newsletter';
import Testimonials from './Testimonial';

const Home = () => {

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your Potential with eShiksha</h1>
          <p className="hero-description">Empowering Education for a Brighter Tomorrow</p>
        </div>
      </section>
      <CallToAction/>
      <Opportunities/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default Home;
