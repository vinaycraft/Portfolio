import React from 'react';
import './index.css';

const App = () => {
  const skills = [
    'C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP',
    'React.js', 'Node.js', 'Express.js', 'HTML', 'CSS',
    'MySQL', 'REST APIs', 'Git', 'OpenCV', 'GPT', 'LangChain'
  ];

  const projects = [
    {
      name: 'PersonaAI - Human Behavior Modeling System',
      date: 'Ongoing',
      description: 'Developing an AI-based digital twin system capable of modeling human personality and behavior patterns. Implementing personality profiling using psychological models like MBTI and Big Five. Integrating vector embeddings to create long-term memory for AI interactions.',
      technologies: ['GPT', 'LangChain', 'Vector Database', 'AI Conversation', 'Personality Analysis']
    },
    {
      name: 'Stranger Meet - Anonymous Video Chat Platform',
      date: '2023-24',
      description: 'Built an Omegle-style platform allowing anonymous communication between users. Developed a streak feature to increase user engagement and platform retention. Implemented college email verification system to restrict users based on institutional domains.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL']
    },
    {
      name: 'Central Order Management System',
      date: '2024-25',
      description: 'Developed a centralized system to manage orders across multiple food court vendors. Implemented backend APIs for order processing, tracking, and status updates. Designed database schema for efficient storage and retrieval of order data.',
      technologies: ['PHP', 'MySQL', 'REST APIs']
    },
    {
      name: 'Instagram Auto Posting System',
      date: '2023-24',
      description: 'Developed a bot to automate Instagram post scheduling and publishing. Designed a system to store media data in spreadsheets and automatically upload posts at scheduled times. Reduced manual effort in content publishing through automation scripts.',
      technologies: ['Python', 'Automation', 'Scheduling']
    },
    {
      name: 'Virtual Mouse Using Computer Vision',
      date: '2022-23',
      description: 'Implemented a computer vision-based virtual mouse controlled by hand gestures. Used real-time webcam input to detect finger positions and convert them into cursor movements. Enabled actions like clicking and scrolling using gesture recognition.',
      technologies: ['Python', 'OpenCV']
    },
    {
      name: 'AI Assistant',
      date: '2025-26',
      description: 'Built a Python-based AI assistant capable of executing system commands and answering user queries. Integrated speech recognition and text processing for interactive communication. Automated tasks such as opening applications, searching the web, and retrieving information.',
      technologies: ['Python', 'NLP', 'Automation']
    }
  ];

  const miniProjects = [
    {
      name: 'Wedding Invitation Website',
      date: '2025-26',
      description: 'Built a responsive wedding invitation website with countdown timer and multimedia gallery. Integrated Google Maps for location navigation. Designed mobile-friendly UI to share event details with guests.',
      technologies: ['JavaScript', 'HTML', 'CSS']
    }
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
            Passionate full-stack developer and AI enthusiast with expertise in building innovative web applications and intelligent systems. 
            Specialized in React.js, Node.js, Python, and emerging AI technologies. Check out my projects below. :)
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:vinay100876@gmail.com" className="github-link" style={{ textDecoration: 'none' }}>
              📧 vinay100876@gmail.com
            </a>
            <a href="tel:+91-7263060086" className="github-link" style={{ textDecoration: 'none' }}>
              📱 +91-7263060086
            </a>
          </div>
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
                  {project.description}
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{ 
                      background: '#f0f0f0', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      color: '#666'
                    }}>
                      {tech}
                    </span>
                  ))}
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
                  {project.description}
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{ 
                      background: '#f0f0f0', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      color: '#666'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="github" className="section github-section">
          <h2>Get In Touch</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/vinaycraft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              🚀 GitHub Profile
            </a>
            <a 
              href="mailto:vinay100876@gmail.com" 
              className="github-link"
            >
              📧 Send Email
            </a>
            <a 
              href="tel:+91-7263060086" 
              className="github-link"
            >
              📱 Call Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
