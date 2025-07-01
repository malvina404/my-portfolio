import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import ThemeToggle from './ThemeToggle';
import ThemeToggle from './themetoggle';

const Header = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (aboutInView) setActiveSection('about');
    else if (skillsInView) setActiveSection('skills');
    else if (projectsInView) setActiveSection('projects');
    else if (contactInView) setActiveSection('contact');
    else if (homeInView) setActiveSection('home');
  }, [aboutInView, skillsInView, projectsInView, contactInView, homeInView]);

  return (
    <>
      <div ref={homeRef} style={{ position: 'absolute', top: '0' }}></div>
      <div ref={aboutRef} style={{ position: 'absolute', top: '50vh' }}></div>
      <div ref={skillsRef} style={{ position: 'absolute', top: '100vh' }}></div>
      <div ref={projectsRef} style={{ position: 'absolute', top: '150vh' }}></div>
      <div ref={contactRef} style={{ position: 'absolute', top: '200vh' }}></div>

      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#about" 
                active={activeSection === 'about'}
                className={activeSection === 'about' ? 'fw-bold' : ''}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                active={activeSection === 'skills'}
                className={activeSection === 'skills' ? 'fw-bold' : ''}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                active={activeSection === 'projects'}
                className={activeSection === 'projects' ? 'fw-bold' : ''}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                active={activeSection === 'contact'}
                className={activeSection === 'contact' ? 'fw-bold' : ''}
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

// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import ThemeToggle from './themetoggle'; // Ensure the path is correct

// const Header = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
//   const [homeRef, homeInView] = useInView({ threshold: 0.5 });
//   const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
//   const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
//   const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
//   const [contactRef, contactInView] = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (aboutInView) setActiveSection('about');
//     else if (skillsInView) setActiveSection('skills');
//     else if (projectsInView) setActiveSection('projects');
//     else if (contactInView) setActiveSection('contact');
//     else if (homeInView) setActiveSection('home');
//   }, [aboutInView, skillsInView, projectsInView, contactInView, homeInView]);

//   return (
//     <>
//       <div ref={homeRef} style={{ position: 'absolute', top: '0' }}></div>
//       <div ref={aboutRef} style={{ position: 'absolute', top: '50vh' }}></div>
//       <div ref={skillsRef} style={{ position: 'absolute', top: '100vh' }}></div>
//       <div ref={projectsRef} style={{ position: 'absolute', top: '150vh' }}></div>
//       <div ref={contactRef} style={{ position: 'absolute', top: '200vh' }}></div>

//       <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
//         <Container>
//           <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#about" active={activeSection === 'about'} className={activeSection === 'about' ? 'fw-bold' : ''}>
//                 About
//               </Nav.Link>
//               <Nav.Link href="#skills" active={activeSection === 'skills'} className={activeSection === 'skills' ? 'fw-bold' : ''}>
//                 Skills
//               </Nav.Link>
//               <Nav.Link href="#projects" active={activeSection === 'projects'} className={activeSection === 'projects' ? 'fw-bold' : ''}>
//                 Projects
//               </Nav.Link>
//               <Nav.Link href="#contact" active={activeSection === 'contact'} className={activeSection === 'contact' ? 'fw-bold' : ''}>
//                 Contact
//               </Nav.Link>
//               <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;
