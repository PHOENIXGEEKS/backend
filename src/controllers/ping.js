const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const ping = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    data: 'Pong',
  });
});

module.exports = ping;
