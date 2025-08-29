import { useState, useEffect } from 'react';
import Projects from './component/project';
import Contact from './component/contact';
import Skills from './component/skills';
import Header from './component/header';
import About from './component/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  // SEO Structured Data Component
  const SEO = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ndote Malvina",
        "jobTitle": "Full-Stack Developer",
        "url": "https://your-portfolio.vercel.app",
        "sameAs": [
          "https://linkedin.com/in/ndote-malvina",
          "https://github.com/ndote-malvina"
        ],
        "knowsAbout": [
          "React", 
          "Node.js", 
          "JavaScript", 
          "HTML", 
          "CSS", 
          "MongoDB",
          "React Native",
          "Microsoft Office",
          "Web Development",
          "Mobile Development"
        ],
        "description": "Passionate full-stack developer specializing in modern web technologies including React, Node.js, and mobile development with React Native"
      });
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }, []);

    return null;
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Update page title and meta description
  useEffect(() => {
    document.title = "Ndote Malvina - Full-Stack Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = "description";
      newMetaDescription.content = "Portfolio of Ndote Malvina, a passionate full-stack developer specializing in React, Node.js, and modern web technologies. View my projects and skills.";
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  return (
    <>
      <SEO />
      <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <main className="container-fluid">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Schema.org markup for the entire website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ndote Malvina Portfolio",
              "url": "https://your-portfolio.vercel.app/",
              "description": "Professional portfolio of Ndote Malvina, Full-Stack Developer",
              "author": {
                "@type": "Person",
                "name": "Ndote Malvina"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-portfolio.vercel.app/#{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </div>
    </>
  );
}

export default App;