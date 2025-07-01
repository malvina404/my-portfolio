import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './themetoggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Create refs and inView states for each section
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  // Handle scroll-based section detection
  useEffect(() => {
    if (aboutInView) setActiveSection('about');
    else if (skillsInView) setActiveSection('skills');
    else if (projectsInView) setActiveSection('projects');
    else if (contactInView) setActiveSection('contact');
    else if (homeInView) setActiveSection('home');
  }, [aboutInView, skillsInView, projectsInView, contactInView, homeInView]);

  // Handle click navigation and update active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Section markers for intersection observer */}
      <div ref={homeRef} style={{ position: 'absolute', top: '0', height: '1px' }}></div>
      <div ref={aboutRef} style={{ position: 'absolute', top: '50vh', height: '1px' }}></div>
      <div ref={skillsRef} style={{ position: 'absolute', top: '100vh', height: '1px' }}></div>
      <div ref={projectsRef} style={{ position: 'absolute', top: '150vh', height: '1px' }}></div>
      <div ref={contactRef} style={{ position: 'absolute', top: '200vh', height: '1px' }}></div>

      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" onClick={() => handleNavClick('home')}>
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#about" 
                active={activeSection === 'about'}
                className={activeSection === 'about' ? 'fw-bold active-nav-link' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                active={activeSection === 'skills'}
                className={activeSection === 'skills' ? 'fw-bold active-nav-link' : ''}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                active={activeSection === 'projects'}
                className={activeSection === 'projects' ? 'fw-bold active-nav-link' : ''}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                active={activeSection === 'contact'}
                className={activeSection === 'contact' ? 'fw-bold active-nav-link' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Nav.Link>
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;