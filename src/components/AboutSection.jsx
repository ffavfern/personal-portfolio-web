
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="bg-gray-100 text-black p-8"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl text-center">
          I am a dedicated designer with a passion for creating stunning and effective designs. With years of experience in the field, I have honed my skills and developed a keen eye for detail.
        </p>
        <ul className="mt-8 space-y-4">
          <li>2019: Started as a freelance designer</li>
          <li>2020: Joined a renowned design firm</li>
          <li>2021: Awarded Designer of the Year</li>
          <li>2022: Founded my own design studio</li>
        </ul>
        <motion.button
          className="mt-8 bg-teal-500 text-white py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          More Info
        </motion.button>
      </div>
    </motion.section>
  );
};

export default AboutSection;
