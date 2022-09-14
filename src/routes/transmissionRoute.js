const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Transmission = require('../views/Transmission');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(Transmission, { newUser, newUserId }, res);
});

module.exports = route;
