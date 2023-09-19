import React, { useState } from 'react';
import '../styles/Opportunities.css';

const Opportunities = () => {
  const [activeSection, setActiveSection] = useState('Government-Exams');
  const [expandedItem, setExpandedItem] = useState(null);

  const opportunitiesData = {
    'Government-Exams': [
      {
        id: 1,
        name: 'Exam Title 1',
        organization: 'Government Organization 1',
        deadline: 'January 31, 2024',
        eligibility: 'Graduation, Age Limit: 21-30 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 2,
        name: 'Exam Title 2',
        organization: 'Government Organization 2',
        deadline: 'February 15, 2024',
        eligibility: 'Post Graduation, Age Limit: 22-32 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 3,
        name: 'Exam Title 3',
        organization: 'Government Organization 3',
        deadline: 'January 31, 2024',
        eligibility: 'Graduation, Age Limit: 21-30 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 4,
        name: 'Exam Title 4',
        organization: 'Government Organization 4',
        deadline: 'February 15, 2024',
        eligibility: 'Post Graduation, Age Limit: 22-32 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
    ],
    'Private-Sector-Jobs': [
      {
        id: 5,
        name: 'Job Title 1',
        organization: 'Private Company 1',
        deadline: 'March 15, 2024',
        eligibility: 'Bachelor\'s degree, Experience: 2 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 6,
        name: 'Job Title 2',
        organization: 'Private Company 2',
        deadline: 'April 5, 2024',
        eligibility: 'Master\'s degree, Experience: 3 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 7,
        name: 'Job Title 3',
        organization: 'Private Company 3',
        deadline: 'March 20, 2024',
        eligibility: 'Bachelor\'s degree, Experience: 1 year',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 8,
        name: 'Job Title 4',
        organization: 'Private Company 4',
        deadline: 'April 10, 2024',
        eligibility: 'Master\'s degree, Experience: 2 years',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
    ],
    'Entrance-Exams': [
      {
        id: 9,
        name: 'Entrance Exam 1',
        organization: 'University 1',
        deadline: 'June 30, 2024',
        eligibility: '12th Grade, Subjects: Physics, Chemistry, Mathematics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 10,
        name: 'Entrance Exam 2',
        organization: 'University 2',
        deadline: 'July 10, 2024',
        eligibility: 'Bachelor\'s degree, Subjects: Biology, Chemistry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 11,
        name: 'Entrance Exam 3',
        organization: 'University 3',
        deadline: 'June 25, 2024',
        eligibility: '12th Grade, Subjects: Physics, Chemistry, Mathematics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 12,
        name: 'Entrance Exam 4',
        organization: 'University 4',
        deadline: 'July 5, 2024',
        eligibility: 'Bachelor\'s degree, Subjects: Biology, Chemistry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
    ],
    'Internships': [
      {
        id: 13,
        name: 'Internship Title 1',
        organization: 'Company A',
        deadline: 'May 15, 2024',
        eligibility: 'Undergraduate students, Duration: 3 months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 14,
        name: 'Internship Title 2',
        organization: 'Company B',
        deadline: 'June 5, 2024',
        eligibility: 'Graduate students, Duration: 2 months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 15,
        name: 'Internship Title 3',
        organization: 'Company C',
        deadline: 'May 20, 2024',
        eligibility: 'Undergraduate students, Duration: 3 months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 16,
        name: 'Internship Title 4',
        organization: 'Company D',
        deadline: 'June 10, 2024',
        eligibility: 'Graduate students, Duration: 2 months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
    ],
    'Scholarships': [
      {
        id: 17,
        name: 'Scholarship 1',
        organization: 'Foundation A',
        deadline: 'August 31, 2024',
        eligibility: 'Undergraduate students, GPA: 3.5 or higher',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 18,
        name: 'Scholarship 2',
        organization: 'Foundation B',
        deadline: 'September 10, 2024',
        eligibility: 'Graduate students, GPA: 3.7 or higher',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 19,
        name: 'Scholarship 3',
        organization: 'Foundation C',
        deadline: 'August 25, 2024',
        eligibility: 'Undergraduate students, GPA: 3.5 or higher',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
      {
        id: 20,
        name: 'Scholarship 4',
        organization: 'Foundation D',
        deadline: 'September 5, 2024',
        eligibility: 'Graduate students, GPA: 3.7 or higher',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        applyLink: '#',
      },
    ],
    
  };

  // Toggle expansion of an item
  const toggleExpand = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null); 
    } else {
      setExpandedItem(itemId); 
    }
  };

  return (
    <section className="opportunities-container">
      <div className="sidebar-menu">
        <ul>
          <li>
            <a
              href="#Government-Exams"
              onClick={() => {
                setActiveSection('Government-Exams');
                setExpandedItem(null); 
              }}
            >
              Government Exams
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
                  className={`opportunity-item ${expandedItem === opportunity.id ? 'expanded' : ''}`}
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
      </div>
    </section>
  );
};

export default Opportunities;
