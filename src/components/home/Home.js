import React from 'react';
import '../../App.css';
import './Home.css';
import { useState, useEffect } from 'react';


const Home = () => {
    const [activeSection, setActiveSection] = useState('');


  useEffect(() => {
    const cardLeft = document.querySelector('.card-left');
    const cardTop = document.querySelector('.card-top');
    const cardRight = document.querySelector('.card-right');
    const handleCardScroll = (e) => {
      e.preventDefault();       // Prevent the default scroll behavior on left side
      const delta = e.deltaY || e.detail || -e.wheelDelta;
      if (cardRight) {cardRight.scrollTop += delta;}       // Apply the scroll to the right side
    };
    
    if (cardLeft) {cardLeft.addEventListener('wheel', handleCardScroll, { passive: false });}
    if (cardTop) {cardTop.addEventListener('wheel', handleCardScroll, { passive: false });}
    const sections = document.querySelectorAll("[id$='-section']");    
    function getVisibleArea(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
      const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));
      return visibleHeight * visibleWidth;
    }

    function updateActiveSection() {
      let closestSection = null;
      let minDistanceFromCenter = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + (rect.height / 2);
        const viewportCenter = window.innerHeight / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

        if (distanceFromCenter < minDistanceFromCenter) {
          minDistanceFromCenter = distanceFromCenter;
          closestSection = section.getAttribute("id");
        }
      });

      setActiveSection(closestSection);
    }
    updateActiveSection();
    cardRight.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cardRight.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (cardLeft) {cardLeft.removeEventListener('wheel', handleCardScroll); }
      if (cardTop) {cardTop.removeEventListener('wheel', handleCardScroll); }
    }
  }, []);

  return (
    <div className="page-container">
      <div className="card">
        <div className="card-top">
          <p className="name">EMILY FOSTER</p>
        </div>
        <div className="card-bottom">
          <div className="card-left">
            <nav className="side-menu">
                <li><a href="#about-section" className={activeSection === 'about-section' ? 'active' : ''}>About</a></li>
                <li><a href="#experience-section" className={activeSection === 'experience-section' ? 'active' : ''}>Experience</a></li>
                <li><a href="#project-section" className={activeSection === 'project-section' ? 'active' : ''}>Projects</a></li>
            </nav>
          </div>

          <div className="card-right">
            <div id="about-section" className="about-section">

                  <p>Hey, I’m Emily! I’m passionate about using technology to solve real-world problems and create 
                    innovative solutions. With a strong foundation in data science, software development, and leadership, 
                    I thrive at the intersection of technology and creativity. I’m particularly excited about the role of 
                    AI and technology in shaping the future of industries like finance, linguistics, and beyond. Whether 
                    it’s developing new tools, managing projects, or collaborating across teams, I’m always eager to learn 
                    and take on new challenges. Please feel free to reach out to me at emilyfoster@g.ucla.edu</p>
                </div>

            <div id="experience-section" className="experience-section">
              <h1>EXPERIENCE</h1>
              <div className="card-item">
                <div className="card-date">
                  <span>Jun 2025 <br /> - <br /> Aug 2025</span> 
                </div>
                <div className="card-description">
                  <h2 className="company-link" onClick={() => window.open('https://www.hughes.com')}>HUGHES NETWORK SYSTEMS</h2>
                  <h3>PROJECT MANAGEMENT INTERN</h3>
                  <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist 
                    in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
                </div>

              </div>
              <div className="card-item">
                <div className="card-date">
                  <span>Sep 2024 <br /> - <br /> Jun 2025</span> 
                </div>
                <div className="card-description">
                  <h2 className="company-link" onClick={() => window.open('https://computing.sscnet.ucla.edu/')}>UCLA SOCIAL SCIENCE COMPUTING</h2>

                  <h3>TECHNOLOGY CONSULTANT</h3>
                  <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist 
                    in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-date">
                <span>Jun 2024 <br /> - <br /> Sep 2024</span> 
                </div>
                <div className="card-description">
                  <h2 className="company-link" onClick={() => window.open('https://bankofsingapore.com')}>BANK OF SINGAPORE</h2>
                  <h3>DATA SCIENCE & ADVANCED ANALYTICS INTERN</h3>
                  <p>Established project roadmap and delegated tasks to another intern, ensuring timely progress and alignment with 
                    project objectives. Enhanced unstructured data storage and retrieval for portfolio commentary across 1,000+ clients, 
                    achieving estimated annual cost savings of $302.4k</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-date">
                  <span>Jan 2024 <br /> - <br /> Present</span> 
                </div>
                <div className="card-description">
                  <h2 className="company-link" onClick={() => window.open('https://www.celf.ucla.edu/')}>UCLA CENTER ON EVERYDAY LIVES OF FAMILIES</h2>
                  <h3>PRINCIPAL INVESTIGATOR </h3>
                  <p>Conducted research using data from the UCLA Sloan CELF lab. Automated extraction and sentiment analysis of 100+ unstructured transcripts. 
                    Fine-tuned sentiment analysis model on SWBD-Senti dataset, improving accuracy from 50% to 70% on naturalistic speech, optimizing 
                    hyperparameters in relation to key performance metrics. Developed a manual segment labeling scheme to assess model performance</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-date">
                  <span>Jun 2024 <br /> - <br /> Present</span> 
                </div>
                <div className="card-description">
                    <h2 className="company-link" onClick={() => window.open('https://bruinlinguists.web.app')}>BRUIN LINGUISTS SOCIETY</h2>
                    <h3>PRESIDENT & LEAD DEVELOPER </h3>
                    <p>Developed website with Firebase and React for abstract submissions; established and managed Git
                      repository and version control. Lead recruitment and expansion of the development team to enhance website functionality and
                      deploy hosting infrastructure for research projects.</p>
                  </div>
                </div>
            </div>
            <div id="project-section" className="project-section">
              <h1>PROJECTS</h1>
              <div className="card-item">
                <div className="card-description">
                  <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist 
                    in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
                                    <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist 
                    in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
                                    <p>Troubleshoot hardware and software issues on Windows and Mac systems for Social Sciences department staff and assist 
                    in setting up equipment such as computers and projectors for meetings, events, and classroom settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;