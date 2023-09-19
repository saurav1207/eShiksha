import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2 className="cta-title">Discover Your Learning Journey</h2>
        <p className="cta-description">
          Elevate your knowledge with eShiksha's diverse courses and resources.
        </p>
        <Link to="/course" className="cta-button">
          Start Learning
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;







// import React from 'react'
// import { Link } from 'react-router-dom';
// import './CallToAction.css';

// const CallToAction = () => {
//   return (
//     <section className="call-to-action">
//     <div className="cta-content">
//       <h2 className="cta-title">Welcome to our eShiksha Website!</h2>
//       <p className="cta-description">Explore our courses and services to enhance your learning experience.</p>
//       <Link to="/course" className="cta-button">Explore Courses</Link>
//     </div>
//   </section>
//   )
// }

// export default CallToAction
