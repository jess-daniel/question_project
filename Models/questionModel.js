const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  question: {
    type: String,
    required: true,
    max: 500,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  IncorrectAnswers: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
