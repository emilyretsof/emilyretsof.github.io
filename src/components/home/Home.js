import React from 'react';
import '../../App.css';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">

      <div className="card">
        <div className="card-left">
          <p className="name">EMILY FOSTER</p>

          {/* Bio line */}
          <p className="bio">Freelance Notary · Researcher · UCLA Linguistics & Computer Science</p>

          {/* Notary context */}
          <p className="notary-info">
            I'm a certified notary public available for general notarial work, loan signings, and more across Los Angeles.<br /><br />
            Rates start at <strong>$15 per signature</strong>, with a <strong>$25 travel fee</strong> within West LA.
          </p>

          {/* Booking link */}
          <div className="calendly-wrapper">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="calendly-link"
            >
              Book a Notary Appointment
            </a>
          </div>

        </div>

      {/* Right card with scrollable content */}
        <div className="card-right">
          <div className="card-item">
            <div className="card-date">
              <span>Sep 2025 <br /> - <br /> Present</span> 
            </div>
            <div className="card-description">
              <h2>UCLA SOCIAL SCIENCE COMPUTING </h2>
              <h3>Technology Consultant</h3>
              <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-date">
            <span>Jun 2024 <br /> - <br /> Sep 2024</span> 
            </div>
            <div className="card-description">
              <h2>BANK OF SINGAPORE</h2>
              <h3>Data Science & Advanced Analytics Intern</h3>
              <p>Established project roadmap and delegated tasks to another intern, ensuring timely progress and alignment with project objectives. Enhanced unstructured data storage and retrieval for portfolio commentary across 1,000+ clients, achieving estimated annual cost savings of $302.4k</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-date">
              <span>Jan 2024 <br /> - <br /> Present</span> 
            </div>
            <div className="card-description">
              <h2>CENTER ON EVERYDAY LIVES OF FAMILIES </h2>
              <h3>Principal Investigator </h3>
              <p>Automated extraction from 100+ unstructured transcripts, standardized data for sentiment analysis, and used SQL for storing and querying processed data
                Model Fine-Tuning (RoBERTa, PyTorch): Fine-tuned sentiment analysis model on SWBD senti dataset, improving
                accuracy from 50% to 70% on naturalistic speech, optimizing hyperparameters in relation to key performance metrics
                Developed a manual segment labeling scheme to assess model performance</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-date">
              <span>Jun 2024 <br /> - <br /> Present</span> 
            </div>
            <div className="card-description">
                <h2>BRUIN LINGUISTS SOCIETY </h2>
                <h3>President & Lead Developer </h3>
                <p>Developed website with Firebase and React for abstract submissions; established and managed Git
                  repository and version control. Leading recruitment and expansion of the development team to enhance website functionality and
                  deploy hosting infrastructure for research projects.</p>
              </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Home;