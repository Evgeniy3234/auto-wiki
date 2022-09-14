const sha256 = require('sha256');
const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const SingIn = require('../views/SingIn');

const { User } = require('../../db/models');

route.get('/', (req, res) => {
  renderTemplate(SingIn, null, res);
});
route.post('/', async (req, res) => {
  console.log('req.body from login ===', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    if (sha256(password) === user.password) {
      req.session.email = user.email;
      req.session.userid = user.id;
      res.redirect('/');
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong email');
  }
});
module.exports = route;
