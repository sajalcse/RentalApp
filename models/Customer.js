const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  customer_type: {
    type: Number,
    required: true
  },
  business_id: {
    type: Number
  }
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);