const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../Models/userModel');

const signToken = require('../utils/signToken');

// middlewares
const registerValidation = require('../middlewares/registerValidate');
const loginValidation = require('../middlewares/loginValidate');

// register
router.post('/register', registerValidation, async (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  try {
    const newUser = new Users(user);
    const result = await newUser.save();
    res.status(201).json({ message: 'user registered', user: result });
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

// login
router.post('/login', loginValidation, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username: username });
    console.log('user', user);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);
      res.status(200).json({ message: 'Signed in Successfully', token });
    } else {
      res.status(404).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'server error', err });
  }
});

module.exports = router;
