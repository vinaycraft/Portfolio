import React from 'react';
import './index.css';

const App = () => {
  const skills = [
    'Linux', 'Git', 'SQL', 'AWS', 'Jenkins', 'Docker', 
    'Java', 'JUnit', 'Jackson', 'HTTP', 'REST', 'Mockito'
  ];

  const projects = [
    { name: 'QTripDynamic', date: 'Feb 2024', type: 'main' },
    { name: 'QTripStatic', date: 'Jan 2024', type: 'main' },
    { name: 'XMeme', date: 'Oct 2023', type: 'main' },
    { name: 'QEats', date: 'Sep 2023', type: 'main' },
    { name: 'Object Modeling', date: 'Aug 2023', type: 'main' },
    { name: 'QMoney', date: 'Jul 2023', type: 'main' },
    { name: 'XURL', date: 'Jun 2023', type: 'main' },
    { name: 'QCalc', date: 'Jun 2023', type: 'main' },
    { name: 'Machine Coding - Restaurant Rating', date: 'Apr 2023', type: 'main' },
    { name: 'Buildout Machine Coding Jukebox', date: 'Apr 2023', type: 'main' },
    { name: 'QContest', date: 'Apr 2023', type: 'main' },
    { name: 'XCompany', date: 'Mar 2023', type: 'main' }
  ];

  const miniProjects = [
    { name: 'Advanced Docker Operations', date: 'May 2023', type: 'mini' },
    { name: 'Docker Container Fundamentals', date: 'May 2023', type: 'mini' },
    { name: 'CI/CD pipeline with Jenkins', date: 'May 2023', type: 'mini' },
    { name: 'CRUD with SQL', date: 'Mar 2023', type: 'mini' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <h3 style={{ margin: 0, color: '#667eea' }}>Portfolio</h3>
          </div>
          <ul className="nav-links">
            <li><a href="#top" onClick={(e) => { e.preventDefault(); scrollToSection('top'); }}>Home</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#github" onClick={(e) => { e.preventDefault(); scrollToSection('github'); }}>GitHub</a></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <section id="top" className="hero">
          <h1>Vinay Patil</h1>
          <p>
            I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :)
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills Acquired</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <div className="date">{project.date}</div>
                <div className="description">
                  Professional project demonstrating industry-level development skills and best practices.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Mini Projects</h2>
          <div className="projects-grid">
            {miniProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <div className="date">{project.date}</div>
                <div className="description">
                  Focused learning project to strengthen specific technical skills and concepts.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="github" className="section github-section">
          <h2>GitHub Contributions</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Check out my GitHub profile to see my contributions and project repositories.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            View GitHub Profile
          </a>
        </section>
      </div>
    </div>
  );
};

export default App;
