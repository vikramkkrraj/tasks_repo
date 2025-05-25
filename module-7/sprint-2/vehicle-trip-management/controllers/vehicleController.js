const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vehicle deleted' });
  } catch (err) {
    next(err);
  }
};

exports.addTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    vehicle.trips.push(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.updateTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    vehicle.trips[req.params.tripIndex] = req.body;
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    vehicle.trips.splice(req.params.tripIndex, 1);
    await vehicle.save();
    res.json({ message: 'Trip deleted' });
  } catch (err) {
    next(err);
  }
};

exports.getTripsOver200 = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ "trips.distance": { $gt: 200 } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getTripsFromCities = async (req, res, next) => {
  try {
    const cities = ['Delhi', 'Mumbai', 'Bangalore'];
    const vehicles = await Vehicle.find({ "trips.startLocation": { $in: cities } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getTripsAfterDate = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ "trips.startTime": { $gte: new Date("2024-01-01") } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getVehiclesByType = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ type: { $in: ['car', 'truck'] } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};
