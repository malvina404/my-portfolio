// import { motion } from 'framer-motion';

// const skills = [
//   { name: 'React', icon: '⚛️' },
//   { name: 'JavaScript', icon: '📜' },
//   { name: 'HTML/CSS', icon: '🎨' },
//   { name: 'Node.js', icon: '🖥️' },
//   { name: 'Git', icon: '🔧' },
//   { name: 'Bootstrap', icon: '🚀' },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-5 bg-light">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="display-4 mb-3">Skills</h2>
//           <div className="mx-auto bg-primary" style={{ width: '4rem', height: '2px' }}></div>
//         </div>
        
//         <div className="row g-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="col-6 col-md-4 col-lg-2"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="card h-100 text-center p-3">
//                 <div className="fs-1 mb-2">{skill.icon}</div>
//                 <h3 className="h5">{skill.name}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import { motion } from 'framer-motion';
import './skill.css';
const Skills = () => {
  const skills = [
    { name: 'React', level: 50, icon: '⚛️' },
    { name: 'React native', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 75, icon: '📜' },
    { name: 'CSS', level: 80, icon: '🎨' },
    { name: 'Node.js',level: 75, icon: '🖥️' },
    { name: 'Git', level: 75,icon: '🔧' },
    { name: 'GitHub',level: 75, icon: '🔧' },
    { name: 'Bootstrap',level: 15, icon: '🚀' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 mb-3">My Skills</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="title-underline mx-auto"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="skills-grid"
        >
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="skill-card"
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <div className="progress">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="progress-bar"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
