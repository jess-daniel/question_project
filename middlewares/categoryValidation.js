const categoryValidation = (req, res, next) => {
  const { category } = req.body;
  console.log(category);
  if (category === 'Decades') {
    next();
  } else if (category === 'General Entertainment') {
    next();
  } else if (category === 'General US') {
    next();
  } else if (category === 'History Modern') {
    next();
  } else if (category === 'Musicals') {
    next();
  } else if (category === 'News') {
    next();
  } else if (category === 'Science') {
    next();
  } else if (category === 'Sport USA') {
    next();
  } else if (category === 'TV Recent') {
    next();
  } else if (category === 'US Presidents & Politics') {
    next();
  } else if (category === 'Art') {
    next();
  } else if (category === 'Business & YouTube') {
    next();
  } else {
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
  }
};

module.exports = categoryValidation;
