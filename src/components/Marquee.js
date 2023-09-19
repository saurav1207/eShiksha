import React, { useRef } from 'react';
import '../styles/Marquee.css';

const Marquee = ({ announcements }) => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div className="marquee-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <marquee
        ref={marqueeRef}
        direction="up"
        behavior="scroll"
        scrollamount="1"
        style={{ height: '180px', whiteSpace: 'normal' }}
        className="latestPart"
      >
        {announcements.map((announcement, index) => (
          <p key={index}>
            ➡️
            <content style={{ color: '#012B55' }}>{announcement.title}&nbsp;</content>
            <a href={announcement.link} className="color-text" target="_blank">
              <strong>Read More&nbsp;</strong>
            </a>
          </p>
        ))}
      </marquee>
    </div>
  );
};

export default Marquee;
