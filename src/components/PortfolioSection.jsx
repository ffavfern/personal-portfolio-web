import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  {
    _id: '1',
    title: 'Project One',
    description: 'Description for project one.',
    date: '2023-06-01',
    type: 'Research and Publication',
    image: '/path/to/image1.jpg',
    link: '#'
  },
  {
    _id: '2',
    title: 'Project Two',
    description: 'Description for project two.',
    date: '2023-05-15',
    type: 'Competition and Awards',
    image: '/path/to/image2.jpg',
    link: '#'
  },
  {
    _id: '3',
    title: 'Project Three',
    description: 'Description for project three.',
    date: '2023-04-20',
    type: 'Speaker and Expert',
    image: '/path/to/image3.jpg',
    link: '#'
  },
  {
    _id: '4',
    title: 'Project Four',
    description: 'Description for project four.',
    date: '2023-03-10',
    type: 'Teaching and Learning',
    image: '/path/to/image4.jpg',
    link: '#'
  },
  // Add more items as needed
];

const PortfolioSection = () => {
  const [index, setIndex] = useState(0);
  const length = portfolioItems.length;
  const intervalId = useRef(null);

  const handleMouseEnter = (direction) => {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setIndex((prevIndex) =>
        direction === 'right' ? (prevIndex + 1) % length : (prevIndex - 1 + length) % length
      );
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalId.current);
  };

  return (
    <motion.section
      id="portfolio"
      className="bg-white text-black p-8"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-left">Portfolio Highlights</h2>
        <div className="mt-8 flex justify-center items-center">
          <div className="flex space-x-4">
            <AnimatePresence>
              {[...Array(3)].map((_, i) => {
                const item = portfolioItems[(index + i) % length];
                const isLeftMost = i === 0;
                const isRightMost = i === 2;

                return (
                  <motion.div
                    key={item._id}
                    className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    onMouseEnter={() => isLeftMost ? handleMouseEnter('left') : isRightMost ? handleMouseEnter('right') : null}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="mt-4 text-xl text-center md:text-left">{item.title}</h3>
                      <p className="mt-2 text-center md:text-left">{item.description}</p>
                      <p className="mt-2 text-gray-600 text-center md:text-left">{new Date(item.date).toLocaleDateString()}</p>
                      <p className="mt-2 text-gray-600 text-center md:text-left">{item.type}</p>
                      <a href={item.link} className="text-teal-500 hover:underline text-center md:text-left">View Project</a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
