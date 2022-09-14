const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const TruckCall = require('../views/TruckCall');

const { Map } = require('../../db/models');

route.get('/', async (req, res) => {
  const tracks = await Map.findAll();
  renderTemplate(TruckCall, { tracks }, res);
});

route.post('/', async (req, res) => {
  console.log('req.body ===>', req.body);
  const {
    coordinates, discription,
  } = req.body;
  try {
    const track = await Map.create({
      user_id: req.session.userid, coordinates, discription,
    });
    res.json(track);
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
