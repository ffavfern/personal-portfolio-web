
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <motion.section
      id="testimonials"
      className="bg-gray-100 text-black p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="testimonial-item bg-white p-4 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p>&ldquo;Fantastic work! Highly recommend.&ldquo;</p>
            <div className="mt-4 flex items-center">
              <img src="/path/to/client1.jpg" alt="Client 1" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Client 1</h3>
                <p className="text-gray-600">CEO, Company 1</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="testimonial-item bg-white p-4 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p>&ldquo;Exceeded our expectations in every way.&ldquo;</p>
            <div className="mt-4 flex items-center">
              <img src="/path/to/client2.jpg" alt="Client 2" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Client 2</h3>
                <p className="text-gray-600">Manager, Company 2</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="testimonial-item bg-white p-4 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p>&ldquo;A true professional and expert designer.&ldquo;</p>
            <div className="mt-4 flex items-center">
              <img src="/path/to/client3.jpg" alt="Client 3" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Client 3</h3>
                <p className="text-gray-600">Director, Company 3</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
