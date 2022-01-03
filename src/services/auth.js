const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = async (user) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + config.JWT_EXPIRY * 24 * 60 * 60,
      data: {
        id: user._id,
        email: user.email,
      },
    },
    config.JWT_SECRET,
  );
  return token;
};

module.exports = {
  generateToken,
};
