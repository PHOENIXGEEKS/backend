const httpStatus = require('http-status');
const { v4: uuidv4 } = require('uuid');
const { UserModel } = require('../models/index');
const ApiError = require('../utils/ApiError');

const forgotPasswordToken = () => uuidv4();

const createUser = async (userBody) => {
  if (await UserModel.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  // eslint-disable-next-line no-param-reassign
  userBody.forgotPasswordToken = forgotPasswordToken();
  return UserModel.create(userBody);
};

const loginUser = async (loginBody) => {
  const user = await UserModel.findOne({ email: loginBody.email });
  if (!user || !(await user.isPasswordMatch(loginBody.password))) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Invalid credentials');
  }
  return user;
};

module.exports = {
  createUser,
  loginUser,
};
