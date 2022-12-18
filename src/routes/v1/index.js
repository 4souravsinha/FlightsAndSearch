const express = require('express');
const {CityController , AirportController} = require('../../controllers/index')

const router = express.Router();

router.post('/city', CityController.createAll);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

router.post('/airport' , AirportController.createAll )
router.delete('/airport/:id', AirportController.destroy);
router.patch('/airport/:id' , AirportController.update);
router.get('/airport/:id', AirportController.get);
router.get('/airport', AirportController.getAll);
module.exports = router;
