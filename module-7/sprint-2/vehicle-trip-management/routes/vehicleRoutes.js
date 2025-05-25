const express = require('express');
const router = express.Router();
const {
  createVehicle, getAllVehicles, updateVehicle, deleteVehicle,
  addTrip, updateTrip, deleteTrip,
  getTripsOver200, getTripsFromCities, getTripsAfterDate, getVehiclesByType
} = require('../controllers/vehicleController');

router.post('/', createVehicle);
router.get('/', getAllVehicles);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

router.post('/:vehicleId/trips', addTrip);
router.put('/:vehicleId/trips/:tripIndex', updateTrip);
router.delete('/:vehicleId/trips/:tripIndex', deleteTrip);

router.get('/queries/long-trips', getTripsOver200);
router.get('/queries/city-trips', getTripsFromCities);
router.get('/queries/trips-after-date', getTripsAfterDate);
router.get('/queries/by-type', getVehiclesByType);

module.exports = router;
