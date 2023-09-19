import React from 'react';
import '../styles/Testimonial.css';

const testimonials = [
    {
      id: 1,
      name: 'Rahul Gupta',
      message:
        'eShiksha has been a tremendous resource for my studies. The variety of courses and study materials available here are exceptional. I can now prepare for exams more effectively.',
      image: 'https://source.unsplash.com/150x150/?indian-student',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      message:
        'As a student, I find eShiksha immensely helpful. The platform offers comprehensive content for various subjects. It is like having a virtual tutor.',
      image: 'https://source.unsplash.com/150x150/?indian-girl',
    },
    {
      id: 3,
      name: 'Amit Patel',
      message:
        'Preparing for exams is challenging, but eShiksha has simplified it. The mock tests and study materials are of high quality. I am grateful for this platform.',
      image: 'https://source.unsplash.com/150x150/?indian-boy',
    },
  ];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonial</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-message">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
