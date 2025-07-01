// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { FaPaperPlane } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const formRef = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     emailjs.sendForm(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       formRef.current,
//       'YOUR_PUBLIC_KEY'
//     )
//     .then(() => {
//       setMessageSent(true);
//       setIsSubmitting(false);
//     })
//     .catch(() => {
//       setIsSubmitting(false);
//     });
//   };

//   return (
//     <section id="contact" className="py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="display-4 mb-3">Contact Me</h2>
//           <div className="mx-auto bg-primary" style={{ width: '4rem', height: '2px' }}></div>
//         </div>
        
//         <motion.form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto"
//           style={{ maxWidth: '600px' }}
//         >
//           <div className="mb-3">
//             <input 
//               type="text" 
//               name="name" 
//               placeholder="Name" 
//               className="form-control form-control-lg" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <input 
//               type="email" 
//               name="email" 
//               placeholder="Email" 
//               className="form-control form-control-lg" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <textarea 
//               name="message" 
//               placeholder="Message" 
//               className="form-control form-control-lg" 
//               rows="5"
//               required 
//             ></textarea>
//           </div>
          
//           <button 
//             type="submit" 
//             disabled={isSubmitting}
//             className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100 py-2"
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//             <FaPaperPlane />
//           </button>
          
//           {messageSent && (
//             <div className="alert alert-success mt-3 text-center">
//               Message sent successfully!
//             </div>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // null, 'success', or 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_z66jmpi',
        'template_01zcszp',
        formRef.current,
        'GZSsnIJ8Z4N635wuU'
      );

      if (result.status === 200) {
        setMessageStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setMessageStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setMessageStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setMessageStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 mb-3">Contact Me</h2>
          <div className="mx-auto bg-primary" style={{ width: '4rem', height: '2px' }}></div>
        </div>
        
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
          style={{ maxWidth: '600px', position: 'relative' }}
        >
          <div className="mb-3">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="form-control form-control-lg" 
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="form-control form-control-lg" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea 
              name="message" 
              placeholder="Message" 
              className="form-control form-control-lg" 
              rows="5"
              required
              minLength={10}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100 py-3"
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FaPaperPlane />
              </>
            )}
          </button>
          
          <AnimatePresence>
            {messageStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`alert mt-4 d-flex align-items-center ${
                  messageStatus === 'success' 
                    ? 'alert-success' 
                    : 'alert-danger'
                }`}
                style={{ position: 'absolute', bottom: '-80px', left: 0, right: 0 }}
              >
                {messageStatus === 'success' ? (
                  <>
                    <FaCheck className="me-2" />
                    Message sent successfully! I'll get back to you soon.
                  </>
                ) : (
                  <>
                    <FaExclamationTriangle className="me-2" />
                    Failed to send message. Please try again.
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;