const loginValidation = (req, res, next) => {
  const user = req.body;
  if (!user.username) {
    res.status(400).json({ message: 'Please include a username' });
  } else if (!user.password) {
    res.status(400).json({ message: 'Please include a password' });
  } else {
    next();
  }
};

module.exports = loginValidation;
