import React, { useState } from 'react';
import '../styles/Opportunities.css';
import opportunitiesData from './OpportunitiesData';
import Marquee from './Marquee';

const Opportunities = () => {
  const [activeSection, setActiveSection] = useState('Government-Exams');
  const [expandedItem, setExpandedItem] = useState(null);



  const announcements = [
    {
      title: 'Examination Calendar for Academic Year 2024-25',
      link: '#',
    },
    {
      title: 'Extension of Date of Registration for Fall Semester 2024',
      link: '#',
    },
    {
      title: 'Scholarship Opportunities for Undergraduate Students',
      link: '#',
    },
    {
      title: 'Important Changes in Admission Process for 2024',
      link: '#',
    },
    {
      title: 'Call for Research Papers: International Conference 2024',
      link: '#',
    },
  ];

  // Function to add a new announcement at the beginning of the array
  const addNewAnnouncement = (title, link) => {
    announcements.unshift({ title, link });
  };

  // Example of adding a new announcement
  addNewAnnouncement('New Announcement Title', '#');

  // Toggle expansion of an item
  const toggleExpand = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <>
      <section className='op-sec'>
        <div className="op-heading">
          <h1>Opportunities For Students</h1>
        </div>
        <div className="opportunities-container">
          <div className="sidebar-menu">
            <ul>
              <li>
                <a
                  href="#Government-Exams"
                  onClick={() => {
                    setActiveSection('Government-Exams');
                    setExpandedItem(null);
                  }}
                > <hr />
                  Government Exams
                  <hr />
                </a>
              </li>
              <li>
                <a
                  href="#Private-Sector-Jobs"
                  onClick={() => {
                    setActiveSection('Private-Sector-Jobs');
                    setExpandedItem(null);
                  }}
                >
                  Private Sector Jobs
                  <hr />
                </a>
              </li>
              <li>
                <a
                  href="#Entrance-Exams"
                  onClick={() => {
                    setActiveSection('Entrance-Exams');
                    setExpandedItem(null);
                  }}
                >
                  Entrance Exams
                  <hr />
                </a>
              </li>
              <li>
                <a
                  href="#Internships"
                  onClick={() => {
                    setActiveSection('Internships');
                    setExpandedItem(null);
                  }}
                >
                  Internships
                  <hr />
                </a>
              </li>
              <li>
                <a
                  href="#Scholarships"
                  onClick={() => {
                    setActiveSection('Scholarships');
                    setExpandedItem(null);
                  }}
                >
                  Scholarships
                  <hr />
                </a>
              </li>
            </ul>
          </div>

          <div className="opportunities-details">
            {activeSection && (
              <>
                <h2>{activeSection}</h2>
                <div className="opportunity-content">
                  {opportunitiesData[activeSection].map((opportunity) => (
                    <div
                      className={`opportunity-item ${expandedItem === opportunity.id ? 'expanded' : ''
                        }`}
                      key={opportunity.id}
                    >
                      <h3 onClick={() => toggleExpand(opportunity.id)}>{opportunity.name}</h3>
                      {expandedItem === opportunity.id && (
                        <>
                          <p>Organization: {opportunity.organization}</p>
                          <p>Application Deadline: {opportunity.deadline}</p>
                          <p>Eligibility Criteria: {opportunity.eligibility}</p>
                          <p>Description: {opportunity.description}</p>
                          <p>
                            How to Apply: <a href={opportunity.applyLink}>Apply Here</a>
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
            <Marquee announcements={announcements} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Opportunities;
