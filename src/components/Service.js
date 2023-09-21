import React from 'react';
import '../styles/Service.css';

const services = [
  {
    title: 'Best Learning Resources',
    description: 'Discover top-quality educational content, courses, and materials handpicked from the web. Say goodbye to endless searching; we have done the work for you. Dive into a world of knowledge with our curated selection of the best learning resources.',
    imageUrl: 'https://source.unsplash.com/300x175/?learning-resources',
  },  
  {
    title: 'Curated Content and Best Courses',
    description: 'Discover handpicked, top-notch courses and curated content designed to boost your skills and knowledge. Our experts select the best educational materials to help you excel in your chosen field.',
    imageUrl: 'https://source.unsplash.com/300x175/?education',
  },
  {
    title: 'Personalized Learning Experience',
    description: 'At E-Shiksha, we understand that every student is unique. Thats why we offer a personalized learning experience tailored to your individual needs and learning style. Our platform adapts to you, providing customized recommendations and resources to help you succeed in your educational journey.',
    imageUrl: 'https://source.unsplash.com/300x175/?personalized-learning',
  },
  
];

const Service = () => {
  return (
    <div>
      {services.map((service, index) => (
        <div className={`Service-section-${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="Service-container">
            <div className="Service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="Service-text">
              <h1 className="title">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
