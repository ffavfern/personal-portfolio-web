
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <motion.div
            className="mb-8 md:mb-0 md:w-1/3"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h2 className="text-3xl font-bold">Let&apos;s collaborate</h2>
            <p className="mt-2">
              I&apos;m passionate about creating designs that not only look great but also function perfectly. Let&apos;s work together to bring your vision to life.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-teal-500">
                <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-teal-500">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-teal-500">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-teal-500">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-teal-500">
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 md:mb-0 md:w-1/3"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h3 className="text-xl font-bold">PROJECTS</h3>
            <ul className="mt-4 space-y-2">
              <li>Tech Rebrand</li>
              <li>Ad Campaign</li>
              <li>App Design</li>
              <li>Brand Guidelines</li>
              <li>Social Media Content</li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/3"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h3 className="text-xl font-bold">CONTACT</h3>
            <ul className="mt-4 space-y-2">
              <li>Email</li>
              <li>Phone</li>
              <li>LinkedIn</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
