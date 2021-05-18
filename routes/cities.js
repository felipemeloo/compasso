const express = require('express');
const cityController = require('../controllers/CityController');

const router = express.Router();

router.post('/create', cityController.saveCity);
router.get('/:city', cityController.findByCity);
router.get('/findCityByState/:state', cityController.findByStateCity);

module.exports = router;