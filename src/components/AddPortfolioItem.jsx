
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AddPortfolioItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    type: '',
    image: '',
    link: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/portfolio', formData);
      if (response.status === 201) {
        navigate('/portfolio'); // Redirect to the portfolio page
      }
    } catch (err) {
      setError('Error adding portfolio item. Please try again.');
      console.error(err);
    }
  };

  return (
    <motion.div
      className="container mx-auto p-8 bg-white rounded shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Add Portfolio Item</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select type</option>
            <option value="งานวิจัยและตีพิมพ์">งานวิจัยและตีพิมพ์</option>
            <option value="การประกวดแข่งขัน">การประกวดแข่งขัน</option>
            <option value="วิทยากรและผู้ทรงคุณวุฒิ">วิทยากรและผู้ทรงคุณวุฒิ</option>
            <option value="การเรียนการสอน">การเรียนการสอน</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add Item
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddPortfolioItem;
