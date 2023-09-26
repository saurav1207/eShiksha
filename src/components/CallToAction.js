import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css';
import explore from '../assets/undraw_explore_re_8l4v.svg';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <div className="left-column">
          <h2 className="cta-title">Discover Your Learning Journey</h2>
          <p className="cta-description">
            Elevate your knowledge with eShiksha's diverse courses and resources.
          </p>
          <Link to="/course" className="cta-button">
            Start Learning
          </Link>
        </div>
        <div className="right-column">
          <img src={explore} alt="Explore Courses" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
