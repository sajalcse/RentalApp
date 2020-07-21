const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
    required: true
  },
  rental_id: {
    type: Number,
    required: true
  },
  number_of_vehicles: {
    type: Number,
    required: true
  },
  start_date: {
    type: String,
    required:true
  },
  end_date: {
    type: String,
    required:true
  }
  
});

module.exports = Rental = mongoose.model('rental', RentalSchema);