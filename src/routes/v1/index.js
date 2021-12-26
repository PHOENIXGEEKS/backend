const express = require('express');
const pingRoute = require('./ping');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: pingRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
