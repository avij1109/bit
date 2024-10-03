import React, { useState } from 'react';
import './Notice.css';

const Notice = () => {
  
  const [activeTab, setActiveTab] = useState('notices');
  const [noticeIndex, setNoticeIndex] = useState(0);
  const [examIndex, setExamIndex] = useState(0);

  
  const notices = [
    {
      date: '08-Dec-2020',
      title: 'Syllabus Of Autonomous MBA 2nd Semester 2020',
      description: 'Syllabus of Autonomous MBA 2nd semester for 2020. For more details, click the button below to read more.',
    },
    {
      date: '15-Jan-2021',
      title: 'New Semester Schedule for 2021',
      description: 'The semester schedule for the year 2021 has been released. Please check the details below.',
    },
  ];

  const examinations = [
    {
      date: '03-Oct-2024',
      title: 'Revaluation Consolidated Result Of B.Tech 5th & 6th Sem Backlog & MBA 4th Sem Regular April-May 2024',
      description: 'Revaluation Consolidated result of B Tech 5th & 6th Sem Backlog & MBA 4th Sem Regular.',
    },
    {
      date: '20-Sep-2024',
      title: 'B.Tech 3rd & 4th Sem Regular Exam Dates',
      description: 'The regular exam dates for B.Tech 3rd & 4th semesters have been announced.',
    },
  ];

  
  const handleNext = () => {
    if (activeTab === 'notices') {
      setNoticeIndex((prevIndex) => (prevIndex + 1) % notices.length);
    } else {
      setExamIndex((prevIndex) => (prevIndex + 1) % examinations.length);
    }
  };

  const handlePrev = () => {
    if (activeTab === 'notices') {
      setNoticeIndex((prevIndex) => (prevIndex - 1 + notices.length) % notices.length);
    } else {
      setExamIndex((prevIndex) => (prevIndex - 1 + examinations.length) % examinations.length);
    }
  };

  return (
    <div className="notice-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'notices' ? 'active' : ''}`}
          onClick={() => setActiveTab('notices')}
        >
          Notices
        </button>
        <button
          className={`tab-button ${activeTab === 'examination' ? 'active' : ''}`}
          onClick={() => setActiveTab('examination')}
        >
          Examination
        </button>
      </div>

      <div className="notice-card">
        {activeTab === 'notices' && (
          <>
            <div className="notice-date">
              <i className="fa fa-calendar"></i> {notices[noticeIndex].date}
            </div>
            <div className="notice-content">
              <h3>{notices[noticeIndex].title}</h3>
              <p>{notices[noticeIndex].description}</p>
              <a href="#" className="btn-read-more">Read more...</a>
            </div>
          </>
        )}

        {activeTab === 'examination' && (
          <>
            <div className="notice-date">
              <i className="fa fa-calendar"></i> {examinations[examIndex].date}
            </div>
            <div className="notice-content">
              <h3>{examinations[examIndex].title}</h3>
              <p>{examinations[examIndex].description}</p>
              <a href="#" className="btn-read-more">View All...</a>
            </div>
          </>
        )}

        <div className="navigation-arrows">
          <button onClick={handlePrev} className="arrow-btn">←</button>
          <button onClick={handleNext} className="arrow-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
