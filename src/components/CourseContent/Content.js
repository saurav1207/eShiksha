import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CourseContent/Content.css'; 
import courses from './coursesData';

const Content = () => {
  const { id } = useParams();

  const selectedCourse = courses.find((course) => course.id === Number(id));

  const [activeHeading, setActiveHeading] = useState(
    selectedCourse?.tableOfContents[0]?.heading || ''
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  const activeContent = selectedCourse.tableOfContents.find(
    (content) => content.heading === activeHeading
  );

  return (
    <div className="single-course">
      <div className="sidebar">
        <ul className="content-list">
          {selectedCourse.tableOfContents.map((content, index) => (
            <li
              key={index}
              className={content.heading === activeHeading ? 'active' : ''}
              onClick={() => handleHeadingClick(content.heading)}
            >
              {content.heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2 className="content-title">{selectedCourse.title}</h2>
        <div className="video-container">
          {activeContent ? (
            <iframe
              title="Embedded Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeContent.videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="placeholder">Select a heading to watch the video</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
