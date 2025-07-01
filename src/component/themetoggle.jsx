// // import styled from 'styled-components';
// // import { FaSun, FaMoon } from 'react-icons/fa';

// // const ToggleButton = styled.button`
// //   padding: 0.5rem;
// //   border-radius: 50%;
// //   background: transparent;
// //   border: none;
// //   transition: background-color 0.3s ease;
  
// //   &:hover {
// //     background-color: ${props => props.theme.toggleHover};
// //   }
// // `;

// // const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
// //   return (
// //     <ToggleButton 
// //       onClick={toggleDarkMode}
// //       aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
// //     >
// //       {darkMode ? (
// //         <FaSun className="text-warning fs-5" />
// //       ) : (
// //         <FaMoon className="text-secondary fs-5" />
// //       )}
// //     </ToggleButton>
// //   );
// // };

// // export default ThemeToggle;

// import { motion } from 'framer-motion';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <motion.button
//       onClick={toggleDarkMode}
//       whileTap={{ scale: 0.9 }}
//       whileHover={{ scale: 1.1 }}
//       style={{
//         background: 'transparent',
//         border: 'none',
//         cursor: 'pointer',
//         fontSize: '1.5rem'
//       }}
//       aria-label="Toggle dark mode"
//     >
//       {darkMode ? (
//         <motion.div
//           key="moon"
//           initial={{ rotate: -20 }}
//           animate={{ rotate: 0 }}
//           exit={{ rotate: 20 }}
//         >
//           <FaMoon color="#f8f9fa" />
//         </motion.div>
//       ) : (
//         <motion.div
//           key="sun"
//           initial={{ rotate: 20 }}
//           animate={{ rotate: 0 }}
//           exit={{ rotate: -20 }}
//         >
//           <FaSun color="#ffc107" />
//         </motion.div>
//       )}
//     </motion.button>
//   );
// };

// export default ThemeToggle;


import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem'
      }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <motion.div
          key="moon"
          initial={{ rotate: -20 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: 20 }}
        >
          <FaMoon color="#f8f9fa" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ rotate: 20 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: -20 }}
        >
          <FaSun color="#ffc107" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
