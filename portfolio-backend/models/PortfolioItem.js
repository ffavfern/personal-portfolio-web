// models/PortfolioItem.js
const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ['งานวิจัยและตีพิมพ์', 'การประกวดแข่งขัน', 'วิทยากรและผู้ทรงคุณวุฒิ', 'การเรียนการสอน'],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
