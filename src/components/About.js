import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">Get to Know About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida sapien vel commodo pulvinar. Ut vel
                        pharetra augue, nec vestibulum tellus. Aenean euismod, mauris non auctor congue, est leo feugiat lectus, vel
                        commodo turpis massa et enim.</p>
                    <p>
                        Fusce gravida tellus ut felis finibus vestibulum. Aliquam congue odio vel gravida maximus. Cras lobortis nulla
                        at neque convallis hendrerit. Sed vulputate tristique massa id finibus. Aliquam erat volutpat. Nulla lobortis
                        eleifend condimentum. 
                    </p></div>
                <div className="About-image">
                    <img src="https://source.unsplash.com/400x300/?about-us"
                        alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
