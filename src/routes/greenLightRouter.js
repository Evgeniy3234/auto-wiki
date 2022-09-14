const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GreenLight = require('../views/GreenLight');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(GreenLight, { newUser, newUserId }, res);
});

module.exports = route;
