const router = require('express').Router();

const Questions = require('../Models/questionModel');

// middleswares

// get all questions
router.get('/', async (req, res) => {
  try {
    const results = await Questions.find().populate('category');
    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: 'No questions' });
    }
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

// get 1 quiz (25 questions)
router.get('/quiz', async (req, res) => {
  try {
    const results = await Questions.find().limit(25);
    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: 'No questions' });
    }
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

// add questions
router.post('/', async (req, res) => {
  const question = req.body;
  try {
    const newQuestion = new Questions(question);
    await newQuestion.save();
    res.status(201).json({
      message: 'Question created successfully',
      question: newQuestion,
    });
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

module.exports = router;
