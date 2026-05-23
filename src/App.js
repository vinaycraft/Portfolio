import React, { useState, useEffect } from 'react';
import './index.css';
import profileImage from './assets/profile.png';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const skills = {
    'Languages': ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'C', 'PHP'],
    'Frontend': ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs'],
    'Database': ['MySQL'],
    'Tools': ['Git', 'GitHub', 'VS Code'],
    'AI/ML': ['Cursor', 'Windsurf', 'Claude Code', 'LangChain', 'OpenCV']
  };

  const projects = [
    {
      name: 'PersonaAI - Human Behavior Modeling System',
      date: 'Ongoing',
      category: 'AI/ML',
      status: 'In Development',
      description: 'Architecting an AI-driven digital twin platform leveraging LangChain to model human personality frameworks and simulate dynamic behavioral patterns. Engineering an algorithmic profiling module that maps conversational inputs to psychological frameworks, including MBTI and the Big Five models. Implementing vector embeddings and semantic search to establish a long-term memory layer.',
      technologies: ['Python', 'GPT', 'LangChain', 'ChromaDB', 'Pinecone', 'NLP']
    },
    {
      name: 'Stranger Meet - Anonymous Video Chat Platform',
      date: '2023-24',
      category: 'Full Stack',
      status: 'Completed',
      description: 'Developed a full-stack, real-time anonymous video streaming platform processing peer-to-peer communication with minimal latency. Built a secure institutional email verification gate using regex and custom token routing, restricting access strictly to authorized university domains. Engineered an engagement-focused retention system featuring user streaks and dynamic database counters.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'WebRTC', 'Socket.io']
    },
    {
      name: 'Central Order Management System',
      date: '2024-25',
      category: 'Backend',
      status: 'Completed',
      description: 'Designed and deployed a centralized multi-tenant order management system, streamlining concurrent transactional workflows across multiple food vendors. Constructed robust backend RESTful APIs for asynchronous order processing, live state updates, and real-time tracking. Optimized a relational MySQL schema with primary/foreign key indexing and normalization rules.',
      technologies: ['PHP', 'MySQL', 'REST APIs', 'Bootstrap']
    },
    {
      name: 'Virtual Mouse Using Computer Vision',
      date: '2022-23',
      category: 'AI/ML',
      status: 'Completed',
      description: 'Built an AI-driven perceptual computing system that maps real-time human hand gestures to hardware cursor controls powered by a standard webcam input. Programmed mathematical coordinate mapping to smoothly translate detected finger coordinates into pixel-perfect screen pointer movements. Implemented algorithmic gesture recognition using custom frame-differencing logic.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
    },
    {
      name: 'Instagram Auto Posting System',
      date: '2023-24',
      category: 'Automation',
      status: 'Completed',
      description: 'Developed a Python automation script harnessing scheduling libraries and spreadsheet APIs to handle automated asset queues, reducing manual content overhead.',
      technologies: ['Python', 'Automation', 'Scheduling']
    },
    {
      name: 'AI Desktop Assistant',
      date: '2025-26',
      category: 'AI/ML',
      status: 'Completed',
      description: 'Programmed a Python system assistant utilizing speech-to-text NLP libraries to interpret voice commands, automate local system scripts, and query external web APIs.',
      technologies: ['Python', 'NLP', 'Automation']
    }
  ];

  const experience = [
    {
      title: 'Programming Instructor / Lecturer',
      company: 'Institution of Technical Education',
      location: 'Pune, India',
      period: '2025 -- 2026',
      duration: '8 Months',
      description: [
        'Delivered comprehensive lectures and practical engineering labs on software fundamentals, full-stack web development, and object-oriented concepts.',
        'Executed structured code reviews and debugging sessions for students, instilling industry-standard best practices for clean development and algorithmic efficiency.',
        'Designed rigorous computer science curriculum, examination papers, and hands-on practical assignments focused on Python, SQL database schemas, and JavaScript application architecture.',
        'Mentored aspiring software engineers through complex programmatic bugs, breaking down complex principles into actionable development workflows.'
      ]
    },
    {
      title: 'President -- Tech Innovation Club (TIC)',
      company: 'Suman Ramesh Tulsiani Technical Campus',
      location: 'Pune, India',
      period: '2024 -- 2025',
      duration: '',
      description: [
        'Managed and led a engineering organization of student developers to foster advanced programming, system design, and open-source contributions.',
        'Spearheaded development workshops, coding bootcamps, and live hackathons centered around modern Web Development, RESTful APIs, and version control frameworks.',
        'Provided peer mentorship to junior developers, establishing foundational competence in C, C++, Python, JavaScript, and object-oriented methodologies.',
        'Orchestrated knowledge-sharing seminars by coordinating with faculty advisors, senior engineers, and industry guest speakers.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) -- Computer Engineering',
      institution: 'Suman Ramesh Tulsiani Technical Campus, Kamshet (SPPU)',
      period: 'Expected Graduation: 2026',
      details: 'Entered directly into the second year of engineering based on academic merit in Diploma.'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'DKTE Society\'s Yashwantrao Chavan Polytechnic, Ichalkaranji',
      period: 'Graduated: 2023',
      details: 'Aggregate Score: 8.1 CGPA | Core Focus: Practical Software Development, Operating Systems, OOP, and Data Structures.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['top', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navigation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}

      <nav>
        <div className="nav-logo">VP</div>
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#top" onClick={(e) => { e.preventDefault(); scrollToSection('top'); }} className={activeSection === 'top' ? 'active' : ''}>Home</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`nav-cta ${activeSection === 'contact' ? 'active' : ''}`}>Contact →</a></li>
        </ul>
      </nav>

      <section id="top" className="hero">
        <div className="vertical-text">Full Stack Developer</div>
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">+6</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+17</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            <div className="hero-greeting">
              <h1>Hello</h1>
              <p className="subtitle">
                It's Vinay Patil, a performance-driven Software Developer with hands-on experience building full-stack web applications, intelligent automation scripts, and computer vision systems. Proficient in React.js, Node.js, Python, and MySQL.
              </p>
            </div>
          </div>
          <div className="hero-right">
            <img 
              src={profileImage} 
              alt="Vinay Patil" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <div className="container">

        <section id="skills" className="section">
          <h2>Skills Acquired</h2>
          <div className="skills-container">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skills-grid">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="skill-badge">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <div className="project-badges">
                    <span className="project-category-badge mono">{project.category}</span>
                    <span className={`project-status-badge ${project.status === 'In Development' ? 'ongoing' : 'completed'}`}>
                      {project.status === 'In Development' ? '🔧 In Development' : '✓ Completed'}
                    </span>
                  </div>
                </div>
                <div className="date">{project.date}</div>
                <div className="description">
                  {project.description}
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0 2rem 2rem' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="mono" style={{ 
                      background: '#FFFFFF', 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '0', 
                      fontSize: '0.8rem',
                      color: '#000000',
                      fontWeight: '500',
                      border: '1px solid #E5E5E5'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="experience-period">{exp.period}</p>
                    {exp.duration && <p style={{ color: '#7B7B7B', fontSize: '0.85rem', marginTop: '0.25rem' }}>{exp.duration}</p>}
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ borderBottom: index !== education.length - 1 ? '1px solid #F8F8F8' : 'none', paddingBottom: index !== education.length - 1 ? '2rem' : '0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#222222', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                    <p style={{ color: '#7B7B7B', fontSize: '1rem', marginBottom: '0.25rem' }}>{edu.institution}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#222222', fontWeight: '500', fontSize: '0.95rem' }}>{edu.period}</p>
                  </div>
                </div>
                <p style={{ color: '#7B7B7B', fontSize: '0.95rem', lineHeight: '1.6' }}>{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section github-section">
          <h2>Get In Touch</h2>
          <p style={{ marginBottom: '2rem', color: '#7B7B7B', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
          <div style={{ marginBottom: '2rem', color: '#7B7B7B', fontSize: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>📧 vinay100876@gmail.com</p>
            <p style={{ marginBottom: '0.5rem' }}>📱 +91-7263060086</p>
            <p>📍 Pune, Maharashtra, India</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/vinaycraft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              LeetCode
            </a>
            <a 
              href="mailto:vinay100876@gmail.com" 
              className="github-link"
            >
              Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Vinay Patil</h3>
              <p>Full Stack Developer & AI Enthusiast</p>
              <a 
                href="c:/Users/Admin/Desktop/Portfolio/Vinay_Patil_Soft_Dev.pdf" 
                download="Vinay_Patil_Resume.pdf"
                className="download-resume-btn"
              >
                Download Resume ↓
              </a>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a href="https://github.com/vinaycraft" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">LeetCode</a>
                <a href="mailto:vinay100876@gmail.com">Email</a>
              </div>
              <p className="footer-copyright">© 2026 Vinay Patil. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
