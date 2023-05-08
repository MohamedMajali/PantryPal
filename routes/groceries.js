const express = require('express');
const router = express.Router();
const Grocery = require('../models/grocerySchema');

// Index Route
router.get('/', async (req, res) => {
  try {
    const groceries = await Grocery.find({});
    res.render('groceries/index', { groceries });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// New Route
router.get('/new', (req, res) => {
  res.render('groceries/new');
});

// Create Route
router.post('/', async (req, res) => {
  try {
    const { name, category, quantity, price, brand, image } = req.body;
    const grocery = new Grocery({ name, category, quantity, price, brand, image });
    await grocery.save();
    res.redirect('/groceries');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Show Route
router.get('/:id', async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    res.render('groceries/show', { grocery });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Edit Route
router.get('/:id/edit', async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    res.render('groceries/edit', { grocery });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Update Route
router.put('/:id', async (req, res) => {
  try {
    const { name, category, quantity, price, brand, image } = req.body;
    const grocery = await Grocery.findByIdAndUpdate(
      req.params.id,
      { name, category, quantity, price, brand, image },
      { new: true }
    );
    res.redirect(`/groceries/${grocery._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    await Grocery.findByIdAndDelete(req.params.id);
    res.redirect('/groceries');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;