import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to our eShiksha Website!</h1>
      <p className="description">Explore our courses and services to enhance your learning experience.</p>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button>
    </div>
  );
};

export default Home;
