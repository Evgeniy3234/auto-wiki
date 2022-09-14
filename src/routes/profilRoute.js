const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profil');

const { User } = require('../../db/models');

route.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


route.get('/:id', async (req, res) => {
  // find in db user where id
  console.log('req.session.userid', req.session.userid);
  console.log('req.params.id', req.params.id);
  const user = await User.findByPk(req.params.id);
  const userson = user?.toJSON();
  if (user && (Number(req.session.userid) === Number(req.params.id))) {
    renderTemplate(Profile, { userson }, res);
    // console.log(user.toJSON());
  } else {
    res.redirect('/');
  }
});
module.exports = route;
