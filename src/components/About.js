import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">Get to Know About Us</h1>
                    <p>
                        Welcome to E-Shiksha, where learning knows no bounds. We are passionate about education and dedicated to making it accessible to all. Our mission is to empower learners of all ages with the knowledge and skills they need to succeed in a rapidly changing world.
                    </p>
                    <p>
                        At E-Shiksha, we curate the best educational content from across the web, providing a one-stop destination for students, professionals, and lifelong learners. Whether you're looking to explore new subjects, enhance your career, or simply satisfy your curiosity, we've got you covered.
                    </p>
                </div>
                <div className="About-image">
                    <img src="https://source.unsplash.com/500x300/?about-education"
                        alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
