// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';

// const About = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   return (
//     <section id="about" className="py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="display-4 mb-3"
//           >
//             About Me
//           </motion.h2>
//           <div className="mx-auto bg-primary" style={{ width: '4rem', height: '2px' }}></div>
//         </div>
        
//         <div className="row align-items-center" ref={ref}>
//           {/* Your about content */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import { FaDownload, FaFilePdf } from 'react-icons/fa';
// import { useState } from 'react';

// const About = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });
 
//    const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownloadCV = () => {
//     setIsDownloading(true);
    
//     // Simulate download delay (remove in production)
//     setTimeout(() => {
//       const cvUrl = '/path-to-your-cv.pdf';
//       const link = document.createElement('a');
//       link.href = cvUrl;
//       link.download = 'YourName_CV.pdf';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       setIsDownloading(false);
//     }, 1500);
//   // Sample about text data
//   const aboutTexts = [
//     "Full-stack developer with years of experience",
//     "Specialized in React, Node.js, and modern web technologies",
//     "Passionate about creating intuitive user experiences",
//     "Strong problem-solving and communication skills"
//   ];

//   return (
//     <section id="about" className="py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="display-4 mb-3"
//           >
//             About Me
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={inView ? { scaleX: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mx-auto bg-primary"
//             style={{ width: '4rem', height: '2px', originX: 0 }}
//           />
//         </div>
        
//         <div className="row align-items-center g-5" ref={ref}>
//           {/* Image Column */}
//           <motion.div 
//             className="col-md-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-center">
//               <img 
//                 src="/portfolio/public/logo192.png" // Replace with your image path
//                 alt="Profile"
//                 className="img-fluid rounded-circle shadow-lg"
//                 style={{ maxWidth: '350px', border: '5px solid #fff' }}
//               />
//             </div>
//           </motion.div>

//           {/* Text Column */}
//           <motion.div 
//             className="col-md-6"
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="ps-md-4">
//               <h3 className="mb-4">Hello, I'm [ndote malvina]</h3>
//               <p className="lead mb-4">
//               hghjfkhtdkfsdfgdfgsfc
//                 I'm a passionate developer dedicated to creating beautiful and functional web applications.
//               </p>
              
//               <div className="mb-4">
//                 {aboutTexts.map((text, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
//                     className="d-flex align-items-center mb-3"
//                   >
//                     <div className="bg-primary rounded-circle me-3" style={{ width: '8px', height: '8px' }} />
//                     <span>{text}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={inView ? { opacity: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//               >
//                 <button className="btn btn-primary btn-lg">
//                   Download Resume
//                 </button>
//               </motion.div>
//               <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mt-5"
//         >
//           <div className="d-flex flex-column flex-md-row align-items-center gap-3">
//             <button 
//               onClick={handleDownloadCV}
//               disabled={isDownloading}
//               className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-4 py-3"
//               style={{
//                 borderRadius: '50px',
//                 fontWeight: '600',
//                 minWidth: '220px'
//               }}
//             >
//               {isDownloading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm" role="status"></span>
//                   Downloading...
//                 </>
//               ) : (
//                 <>
//                   <FaDownload />
//                   Download CV
//                 </>
//               )}
//             </button>
            
//             <div className="d-flex align-items-center gap-2 text-muted">
//               <FaFilePdf />
//               <small>PDF Format (2.4 MB)</small>
//             </div>
//           </div>
          
//           {/* Optional quality assurance message */}
//           <p className="text-muted mt-3 small">
//             My CV is always kept up-to-date with my latest experience and skills.
//           </p>
//         </motion.div>
//       </div>
    
//             {/* {/* </div> */}
//           </motion.div> 
//         </div>
//       </div>
//     </section>
//   );
// };
// }
// export default About;
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const cvUrl = '/portfolio/public/CV_202404180942407_094709.pdf'; // Update with your actual CV path
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'CV_202404180942407_094709.pdf'; // Update with your name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1500);
  };

  const aboutTexts = [
    "Full-stack developer with years of experience",
    "Specialized in React, Node.js, and modern web technologies",
    "Passionate about creating intuitive user experiences",
    "Strong problem-solving and communication skills"
  ];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="display-4 mb-3"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto bg-primary"
            style={{ width: '4rem', height: '2px', originX: 0 }}
          />
        </div>
        
        <div className="row align-items-center g-5" ref={ref}>
          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <img 
                src="/portfolio/public/profil.png" // Replace with your image path
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '350px', border: '5px solid #fff' }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ps-md-4">
              <h3 className="mb-4">Hello, I'm [ndote malvina]</h3>
              <p className="lead mb-4">
                I'm a passionate developer dedicated to creating beautiful and functional web applications.
              </p>
              
              <div className="mb-4">
                {aboutTexts.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="d-flex align-items-center mb-3"
                  >
                    <div className="bg-primary rounded-circle me-3" style={{ width: '8px', height: '8px' }} />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button className="btn btn-primary btn-lg" onClick={handleDownloadCV}>
                  Download Resume
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5"
              >
                <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                  <button 
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-4 py-3"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      minWidth: '220px'
                    }}
                  >
                    {isDownloading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status"></span>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <FaDownload />
                        Download CV
                      </>
                    )}
                  </button>
                  
                  <div className="d-flex align-items-center gap-2 text-muted">
                    <FaFilePdf />
                    <small>PDF Format (2.4 MB)</small>
                  </div>
                </div>
                
                <p className="text-muted mt-3 small">
                  My CV is always kept up-to-date with my latest experience and skills.
                </p>
              </motion.div>
            </div>
          </motion.div> 
        </div>
      </div>
    </section>
  );
};

export default About;
