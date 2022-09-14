const route = require('express').Router();

route.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = route;
