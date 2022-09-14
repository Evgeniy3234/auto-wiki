const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Error = require('../views/Errors');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(Error, { newUser, newUserId }, res);
});

module.exports = route;
