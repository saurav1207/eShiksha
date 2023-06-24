import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Online Courses and Classes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida sapien vel commodo pulvinar. Ut vel pharetra augue, nec vestibulum tellus. Aenean euismod, mauris non auctor congue, est leo feugiat lectus, vel commodo turpis massa et enim.',
    imageUrl: 'https://source.unsplash.com/400x300/?courses',
  },
  {
    title: 'Live Webinars and Workshops',
    description: 'Fusce gravida tellus ut felis finibus vestibulum. Aliquam congue odio vel gravida maximus. Cras lobortis nulla at neque convallis hendrerit. Sed vulputate tristique massa id finibus. Aliquam erat volutpat. Nulla lobortis eleifend condimentum.',
    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
  },
  {
    title: 'Personalized Learning Experience',
    description: 'Vestibulum sodales elit nisl, id tincidunt ligula facilisis at. Integer vestibulum ante ac tincidunt aliquet. Nunc ut tortor efficitur, rutrum odio ac, dapibus purus.',
    imageUrl: 'https://source.unsplash.com/400x300/?personalized',
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
