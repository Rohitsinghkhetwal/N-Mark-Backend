const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter hotel name'],
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  beds: {
    type: Number,
    required: true,
    min: [1, 'Beds must be at least 1']
  },
  bathrooms: {
    type: Number,
    required: true,
    min: [1, 'Bathrooms must be at least 1']
  },
  area_sqft: {
    type: Number,
    required: true
  },
  price_per_night: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hotel', hotelSchema);