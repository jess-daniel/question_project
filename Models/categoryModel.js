const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  category: {
    type: String,
    enum: [
      'Decades',
      'General Entertainment',
      'General US',
      'History Modern',
      'Musicals',
      'News',
      'Science',
      'Sport USA',
      'TV Recent',
      'US Presidents & Politics',
      'Art',
      'Business & YouTube',
    ],
  },
});

module.exports = mongoose.model('Category', CategorySchema);
