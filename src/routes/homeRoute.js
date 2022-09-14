const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

route.get('/', (req, res) => {
  const newUser = req.session?.email;
  const newUserId = req.session?.userid;
  renderTemplate(Home, { newUser, newUserId }, res);
});

module.exports = route;
