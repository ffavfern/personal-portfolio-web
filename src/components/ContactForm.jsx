
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      id="contact"
      className="bg-black text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="mt-2">Let&apos;s discuss your next project.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12A4 4 0 0112 8a4 4 0 100 8 4 4 0 004-4zm0 0v1a4 4 0 01-4 4 4 4 0 010-8 4 4 0 014 4z" />
              </svg>
              <span>Email: john@example.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2-2h14a1 1 0 011 1v1H4V7a1 1 0 011-1z" />
              </svg>
              <span>Phone: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A12 12 0 012.186 9.23M6 9a4 4 0 018 0m3 0a4 4 0 018 0m-6 10a4 4 0 01-8 0m-4 0a4 4 0 018 0m3-10a4 4 0 018 0m-2 8h2m-4 0h2m-6 0h2m-6 0h2m-4 0h2" />
              </svg>
              <span>Location: 123 Design Street, Creativetown, USA</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <form className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input type="text" className="w-full p-2 mt-2 border border-gray-600 rounded bg-gray-900 text-white" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input type="email" className="w-full p-2 mt-2 border border-gray-600 rounded bg-gray-900 text-white" placeholder="yourname@example.com" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Message</label>
              <textarea className="w-full p-2 mt-2 border border-gray-600 rounded bg-gray-900 text-white" placeholder="Your message here..."></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
