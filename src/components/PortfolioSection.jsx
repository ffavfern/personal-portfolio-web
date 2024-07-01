
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio');
        setPortfolioItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPortfolioItems();
  }, []);

  return (
    <motion.section
      id="portfolio"
      className="bg-white text-black p-8"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Portfolio Highlights</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item._id}
              className="portfolio-item"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <h3 className="mt-4 text-xl">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
              <a href={item.link} className="text-teal-500 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
