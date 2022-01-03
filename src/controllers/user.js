const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { UserService, AuthService } = require('../services');
const config = require('../config/config');

const register = catchAsync(async (req, res) => {
  const user = await UserService.createUser(req.body);
  const token = await AuthService.generateToken(user);
  res.cookie('authentication', token.toString('base64'), {
    maxAge: 24 * 60 * 60 * 1000,
    // You can't access these tokens in the client's javascript
    httpOnly: true,
    // Forces to use https in production
    secure: config.NODE_ENV === 'production',
  });
  res.status(httpStatus.CREATED).send({ success: true, data: user });
});

module.exports = register;
