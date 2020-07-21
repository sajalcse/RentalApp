const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  rental_id: {
    type: Number,
    required: true
  },
  vehicle_id: {
    type: Number,
    required: true
  }
});

module.exports = Vehicle = mongoose.model('vehicle', VehicleSchema);