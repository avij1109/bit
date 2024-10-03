import React from 'react';
import './Principal.css';
import princ from '../../assets/princ.png'
import EEE from '../../assets/EEE.png'
const Principal = () => {
  return (
    <div className="media-section">
      <div className="message-from-principal">
        <div className="principal-info">
          <img src={princ} alt="Dr. Arun Arora" className="principal-photo" />
          <div className="principal-message-text">
            <h2>Message from the Principal</h2>
            <h4>Dr. Arun Arora, Principal</h4>
            <p>
              At Bhilai Institute of Technology, our vision is to empower students with cutting-edge knowledge to serve the industry and society. 
              We are proud of our legacy as one of the leading technological institutions in India.
            </p>
            <a href="link_to_principal_message" className="button-link">Learn More</a>
          </div>
        </div>
      </div>
      
      <div className="latest-media-coverage">
        <div className="media-coverage-header">
          <h2>Latest Media Coverage</h2>
          <h4>26 April 2024</h4>
        </div>
        <div className="project-highlight">
          <h3>Project Showcase: Open Innovation 2024</h3>
          <p>Hosted by the EEE Department, this event showcases breakthrough projects from students focusing on innovative technology solutions.</p>
          <img src={EEE} alt="Project Showcase" className="news-thumbnail EEE" />
          <a href="path_to_full_article" className="button-link">Read Full Story</a>
        </div>
      </div>
    </div>
  );
};

export default Principal;
