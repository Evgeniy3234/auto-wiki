const sha256 = require('sha256');
const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');

const { User } = require('../../db/models');

route.get('/', (req, res) => {
  renderTemplate(SignUp, null, res);
});

route.post('/', async (req, res) => {
  console.log('req.body from post =====>', req.body);
  try {
    const { userName, email, password } = req.body;
    const userCheck = await User.findOne({ where: { email: req.body.email }, raw: true });
    if (userCheck) {
      res.redirect('/signIn');
    } else {
      const user = await User.create({ userName, email, password: sha256(password) });
      req.session.email = user.email;
      req.session.userid = user.id;
      res.redirect('/');
    }
  } catch (error) {
    console.error('Error in registration route  ===> ', error);
  }
});

module.exports = route;
