import { motion } from "framer-motion";

import Typical from "react-typical";

const HeroSection = () => {
  return (
    <section className=" text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left leading-10	">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello Mate{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I&apos;m Adirek Nuansri,
            <span className="text-blue-500">
              <Typical
                steps={["Chinese", 3000, "Teacher", 1000]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
          </h2>
          <p className="mb-6">
            <strong>Hi !</strong> Everyone I&apos;m a Chinese teacher. Welcome to my experience. I&apos;m a
            great place for you to tell a story and let you know a little more
            about me.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
            <motion.a
              className="bg-white text-gray-800 border border-gray-300 py-2 px-6 rounded-full hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1nOr2V0OqJbMxUmQRy1PU33tPAUHmWTBR/preview"
            target="_blank"
            rel="noopener noreferrer"
            
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </motion.a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img src="/assets/img/profile-a.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
