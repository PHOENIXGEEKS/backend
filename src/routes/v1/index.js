const express = require('express');
const pingRoute = require('./ping');
const userRoute = require('./user');
const authRoute = require('./auth');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: pingRoute,
  },
  {
    path: '/register',
    route: userRoute,
  },
  {
    path: '/login',
    route: authRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
