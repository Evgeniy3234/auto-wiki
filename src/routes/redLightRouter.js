const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const RedLight = require('../views/RedLight');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(RedLight, { newUser, newUserId }, res);
});

module.exports = route;
