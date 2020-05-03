const router = require('express').Router();

const Category = require('../Models/categoryModel');

// middlewares
const categoryValidation = require('../middlewares/categoryValidation');

// get all categories
router.get('/', async (req, res) => {
  try {
    const results = await Category.find();
    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(200).json({ message: 'No Categories' });
    }
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

// add a new category
router.post('/', categoryValidation, async (req, res) => {
  const data = req.body;
  try {
    const newCategory = new Category({ category: data.category });
    await newCategory.save();
    res.status(201).json({
      message: 'Category created successfully!',
      category: newCategory,
    });
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

module.exports = router;
