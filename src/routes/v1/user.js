const express = require('express');
const { UserController } = require('../../controllers/index');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user');

const router = express.Router();

router.route('/').post(validate(userValidation.register), UserController.register);

module.exports = router;
