
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-5xl font-bold">Crafting Excellence in Design</h1>
      <p className="mt-4 text-xl">Showcasing the art of design mastery</p>
      <motion.button
        className="mt-8 bg-teal-500 text-white py-2 px-4 rounded"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore My Work
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
