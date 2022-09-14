const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const OrangeLight = require('../views/OrangeLight');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(OrangeLight, { newUser, newUserId }, res);
});

module.exports = route;
