const jwt = require('jsonwebtoken');

const signToken = (user) => {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, process.env.SECRET, options);
};

module.exports = signToken;
