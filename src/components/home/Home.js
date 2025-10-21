import React from 'react';
import '../../App.css';
import './Home.css';
import { useState, useEffect } from 'react';


const Home = () => {
  const [activeSection, setActiveSection] = useState('about-section');

  // Original scroll handler for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // NEW: Scroll sync between left and right sections
  useEffect(() => {
    const cardLeft = document.querySelector('.card-left');
    const cardRight = document.querySelector('.card-right');
    const handleLeftScroll = (e) => {
      // Prevent the default scroll behavior on left side
      e.preventDefault();
      const delta = e.deltaY || e.detail || -e.wheelDelta;
      // Apply the scroll to the right side
      if (cardRight) {cardRight.scrollTop += delta;}
    };
    
    if (cardLeft) {cardLeft.addEventListener('wheel', handleLeftScroll, { passive: false });}
    
    return () => {
      if (cardLeft) {
        cardLeft.removeEventListener('wheel', handleLeftScroll);
      }
    };
  }, []); // Empty dependency array - runs once on mount
  
  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container">

      <div className="card">
        <div className="card-left">
          <nav className="side-menu">
            <ul>
              <li><a href="#about-section"
                  className={activeSection === 'about-section' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick('about-section');
                  }}>ABOUT</a></li>
              <li><a href="#experience-section"
                  className={activeSection === 'experience-section' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick('experience-section');
                  }}>EXPERIENCE</a></li>
              <li><a href="#project-section"
                  className={activeSection === 'project-section' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick('project-section');
                  }}>PROJECTS</a></li>
            </ul>
            <p className="side-link" onClick={() => window.open('https://www.linkedin.com/in/emily-mei-foster')}>LINKEDIN</p>
            <p className="side-link" onClick={() => window.open('https://github.com/emilyretsof')}>GITHUB</p>
          </nav>
        </div>

      {/* Right card with scrollable content */}
        <div className="card-right">
              <p className="name">EMILY FOSTER</p>

              <div className="about-item">
                <p>Hey, I’m Emily! I’m passionate about using technology to solve real-world problems and create 
                  innovative solutions. With a strong foundation in data science, software development, and leadership, 
                  I thrive at the intersection of technology and creativity. I’m particularly excited about the role of 
                  AI and technology in shaping the future of industries like finance, linguistics, and beyond. Whether 
                  it’s developing new tools, managing projects, or collaborating across teams, I’m always eager to learn 
                  and take on new challenges. Please feel free to reach out to me at emilyfoster@g.ucla.edu</p>
              </div>


          <div id="experience-section" className="experience-section">
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
            <div className="card-item">
            <div className="card-date"></div>

              <div className="card-description">
                  <h2>PROJECTS </h2>
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
  );
};

export default Home;