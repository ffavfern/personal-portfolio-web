
import { motion } from 'framer-motion';


const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-200 text-black py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsagbBtnU9t4JcikIZYEySDJ4b9FvY0iZRg&s" alt="Profile" className="w-80 h-80 object-cover rounded-full shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-teal-500 uppercase mb-2">About Me</h2>
          <h3 className="text-3xl font-bold mb-4">More Than 10+ Years Chinese teacher Experienced</h3>
          <p className="text-lg mb-4">
        I am a highly experienced Chinese teacher based in Thailand with over a decade of teaching expertise. My passion lies in imparting knowledge and fostering a deep understanding of the Chinese language among my students. Over the years, I have developed innovative teaching methods that cater to diverse learning styles, ensuring that each student achieves their full potential.
      </p>
          <div className="mb-4">
            <p><strong>Name:</strong> Adirek Nuansri</p>
            <p><strong>Email:</strong> Adirek.n2020@gmail.com</p>
            <p><strong>Location:</strong> Chiangmai, Thailand</p>
            {/*<p><strong>Office:</strong> Freelancer, Dynamic, Remote</p>*/}
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1nOr2V0OqJbMxUmQRy1PU33tPAUHmWTBR/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
            >
              Download CV
            </button>
          </motion.a>
          
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-teal-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-700 hover:text-teal-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-700 hover:text-teal-500"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-700 hover:text-teal-500"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
