const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Suspension = require('../views/Suspension');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(Suspension, { newUser, newUserId }, res);
});

module.exports = route;
