import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  {
    _id: '1',
    title: 'ตรวจประเมินจัดตั้งองค์กรรับรองสมรรถนะบุคคลฯ',
    description: "ตรวจประเมินจัดตั้งองค์กรรับรองสมรรถนะบุคคลฯ สถาบันคุณวุฒิวิชาชีพ องค์การมหาชน",
    date: '2023-06-01',
    type: 'Research and Publication',
    image: 'https://static.wixstatic.com/media/1615f4_e5bcb70ed9ec447baf88c235cab042b8~mv2.png/v1/fill/w_312,h_205,al_c,q_80,usm_0.66_1.00_0.01/1615f4_e5bcb70ed9ec447baf88c235cab042b8~mv2.png',
    link: '#'
  },
  {
    _id: '2',
    title: 'พัฒนาศักยภาพทางวิชาชีพครูไทย',
    description: 'การบรรยาย "การพัฒนาศักยภาพครูไทย ที่สอนภาษาจีนในประเทศไทย"',
    date: '2023-05-15',
    type: 'Competition and Awards',
    image: 'https://static.wixstatic.com/media/1615f4_2ebaf24a541d40bbbb55884ad1982b60~mv2.jpg/v1/fill/w_312,h_234,al_c,q_80,usm_0.66_1.00_0.01/1615f4_2ebaf24a541d40bbbb55884ad1982b60~mv2.jpg',
    link: '#'
  },
  {
    _id: '3',
    title: 'การเสวนาแลกเปลี่ยนความรู้และประสบการณ์',
    description: 'การเสวนาแลกเปลี่ยนความรู้และประสบการณ์การจัดการเรียนการสอนภาษาจีนสำหรับนักเรียนไทย',
    date: '2023-04-20',
    type: 'Speaker and Expert',
    image: 'https://static.wixstatic.com/media/1615f4_8ea4677774fe483e9f3460d9e8a5a51d~mv2.jpg/v1/fill/w_312,h_234,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ea4677774fe483e9f3460d9e8a5a51d~mv2.jpg',
    link: '#'
  },
  {
    _id: '4',
    title: 'การลงนามความร่วมมือทางวิชาการด้านภาษาและวัฒนธรรมจีน',
    description: 'การลงนามความร่วมมือทางวิชาการด้านภาษาและวัฒนธรรมจีน ระหว่างสถานศึกษา องค์กรต่าง ๆ',
    date: '2023-03-10',
    type: 'Teaching and Learning',
    image: 'https://static.wixstatic.com/media/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg/v1/fill/w_312,h_207,al_c,q_80,usm_0.66_1.00_0.01/1615f4_8ced037eb24b46aab1f303b2fa40c971~mv2.jpg',
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
      className="bg-white text-black py-20"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container mx-auto justify-between">
        <h2 className="text-3xl font-bold text-center md:text-left">Portfolio Highlights</h2>
        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-4 justify-center">
            <AnimatePresence>
              {[...Array(3)].map((_, i) => {
                const item = portfolioItems[(index + i) % length];
                const isLeftMost = i === 0;
                const isRightMost = i === 2;

                return (
                  <motion.div
                    key={item._id}
                    className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden w-96"
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
