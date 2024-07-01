// routes/portfolio.js
const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem');

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one portfolio item
router.get('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a portfolio item
router.post('/', async (req, res) => {
  const { title, description, image, link } = req.body;
  const item = new PortfolioItem({
    title,
    description,
    image,
    link,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a portfolio item
router.put('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    const { title, description, image, link } = req.body;
    item.title = title || item.title;
    item.description = description || item.description;
    item.image = image || item.image;
    item.link = link || item.link;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a portfolio item
router.delete('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.remove();
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
