import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Course.css';
import WebDevImage from '../assets/undraw_web_development_0l6v.svg';
import MLImage from '../assets/undraw_source_code_re_wd9m.svg';
import CloudImage from '../assets/undraw_upload_re_pasx.svg';

const Course = () => {
  const initialQuery = ''; 
  const [query, setQuery] = useState(initialQuery);
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn to build websites and web applications. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks like Node.js and Django, this course covers the full stack of web development.',
      image: WebDevImage,
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Explore the concepts and algorithms of machine learning. Dive into supervised and unsupervised learning, neural networks, and deep learning techniques. Gain hands-on experience through real-world projects.',
      image: MLImage,
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Discover cloud computing and its services. Learn about popular cloud platforms like AWS, Azure, and Google Cloud. Explore cloud architecture, virtualization, and containerization technologies.',
      image: CloudImage,
    },
  ];
  
  // Function to handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="course-section">
      <div className="search-bar">
        <input
          type="text"
          className='srch'
          placeholder="Search for courses"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <div className="course-container">
        {filteredCourses.length === 0 ? (
          <p className="no-courses-message">No courses found.</p>
        ) : (
          filteredCourses.map((course, index) => (
            <div
              className={`course-card ${
                index % 2 === 0 ? 'course-section-even' : 'course-section-odd'
              }`}
              key={course.id}
            >
              <div className="course-details">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <Link to={`/course/${course.id}`} className="course-button">
                  Let's Learn
                </Link>
              </div>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Course;
