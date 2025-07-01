// import styled from 'styled-components';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const ProjectsSection = styled.section`
//   padding: 5rem 0;
//   background-color: ${props => props.theme.background};
// `;

// const ProjectCard = styled(motion.div)`
//   background: ${props => props.theme.cardBackground || '#fff'};
//   border-radius: 0.5rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
// `;

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-commerce Platform",
//       description: "Full-featured online store with payment processing",
//       tags: ["React", "Node.js", "MongoDB"],
//       github: "#",
//       live: "#"
//     }
//     // Add more projects
//   ];

//   return (
//     <ProjectsSection id="projects">
//       <div className="container">
//         {/* Section header */}
        
//         <div className="row">
//           {projects.map((project, index) => (
//             <div className="col-md-6 mb-4" key={index}>
//               <ProjectCard whileHover={{ y: -5 }}>
//                 <div className="p-4">
//                   <div className="d-flex justify-content-between mb-3">
//                     <ProjectTitle>{project.title}</ProjectTitle>
//                     <div className="d-flex gap-3">
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <FaGithub className="fs-5" />
//                       </a>
//                       <a href={project.live} target="_blank" rel="noopener noreferrer">
//                         <FaExternalLinkAlt className="fs-5" />
//                       </a>
//                     </div>
//                   </div>
//                   {/* Rest of project details */}
//                 </div>
//               </ProjectCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </ProjectsSection>
//   );
// };

// export default Projects;

import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './project.css'

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.background};
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground || '#fff'};
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${props => props.theme.text};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Mobile Patient Tracking System",
      description: "A cross-platform mobile application for healthcare providers to monitor patient vitals, appointments, and treatment plans in real-time.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      github: "https://github.com/malvina404/patient-management-system",
      live: "#",
      icon: <FaMobile size={24} />
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects, skills, and professional experience with modern animations and dark mode support.",
      tags: ["React", "Styled Components", "Framer Motion", "EmailJS"],
      github: "https://github.com/malvina404/my-portfolio",
      live: "#",
      icon: <FaLaptopCode size={24} />
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment processing, inventory management, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "http",
      live: "#"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="display-4 mb-3"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto bg-primary"
            style={{ width: '4rem', height: '2px', originX: 0 }}
          />
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard whileHover={{ y: -10 }}>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      {project.icon && (
                        <div className="mb-2">
                          {project.icon}
                        </div>
                      )}
                      <ProjectTitle>{project.title}</ProjectTitle>
                    </div>
                    <IconWrapper>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </IconWrapper>
                  </div>
                  
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TagContainer>
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </div>
              </ProjectCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;