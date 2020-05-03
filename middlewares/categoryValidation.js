const categoryValidation = (req, res, next) => {
  const { category } = req.body;
  if (
    category != 'Decades' ||
    'General Entertainment' ||
    'General US' ||
    'History Modern' ||
    'Musicals' ||
    'News' ||
    'Science' ||
    'Sport USA' ||
    'TV Recent' ||
    'US Presidents & Politics' ||
    'Art' ||
    'Business & YouTube'
  ) {
    res.status(400).json({
      message: 'Please provide a valid category',
      validCategories: [
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
    });
  } else {
    next();
  }
};

module.exports = categoryValidation;
