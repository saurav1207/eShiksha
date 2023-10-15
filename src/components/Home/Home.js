import React from 'react';
import './Home.css';
import CallToAction from '../CallToAction/CallToAction';
import Opportunities from '../Opportunity/Opportunities';
import WorkFlow from '../Workflow/Workflow';
import Newsletter from '../Newsletter/Newsletter';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className='hero-heading'>Education. Innovation. Progress.</h1>
          {/* <h2 className="hero-title">Unlock your potential with curated content based on seniors feedback.</h2> */}
          {/* <div className="feature-buttons">
            <button className="feature-button">Feature 1</button>
            <button className="feature-button">Feature 2</button>
            <button className="feature-button">Feature 3</button>
          </div> */}
        </div>
      </section>
      <CallToAction />
      <WorkFlow />
      <Opportunities />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
