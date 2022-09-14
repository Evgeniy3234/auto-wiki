const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Engine = require('../views/Engine');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(Engine, { newUser, newUserId }, res);
});

module.exports = route;
