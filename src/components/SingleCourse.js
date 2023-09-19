import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SingleCourse.css';

const SingleCourse = () => {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      content: 'Course content for Web Development',
      tableOfContents: [
        { heading: 'HTML', videoId: 'BsDoLVMnmZs' },
        { heading: 'CSS', videoId: 'sqJ6xZ9mUwE' },
        { heading: 'JavaScript', videoId: 'hKB-YGF14SY' },
        { heading: 'Responsive Web Design', videoId: 'FZ_ZOw1fVn0' },
      ],
    },
    {
      id: 2,
      title: 'Machine Learning',
      content: 'Course content for Machine Learning',
      tableOfContents: [
        { heading: 'Introduction to Machine Learning', videoId: 'ukzFI9rgwfU' },
        { heading: 'Linear Regression', videoId: 'NUXdtN1W1FE' },
        { heading: 'Logistic Regression', videoId: 'XnOAdxOWXWg' },
        { heading: 'Decision Trees', videoId: 'RmajweUFKvM' },
      ],
    },
    {
      id: 3,
      title: 'Cloud Computing',
      content: 'Course content for Cloud Computing',
      tableOfContents: [
        { heading: 'Introduction to Cloud Computing', videoId: '8C_kHJ5YEiA' },
        { heading: 'Amazon Web Services (AWS)', videoId: 'a9__D53WsUs' },
        { heading: 'Microsoft Azure', videoId: 'oPSHs71mTVU' },
        { heading: 'Google Cloud Platform (GCP)', videoId: 'kzKFuHk8ovk' },
      ],
    },
  ];

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

export default SingleCourse;
