const express = require('express');
const router = express.Router();
const Hotel = require("../Models/Hotel.model")

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new hotel
router.post('/create', async (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    image: req.body.image,
    location: req.body.location,
    beds: req.body.beds,
    bathrooms: req.body.bathrooms,
    area_sqft: req.body.area_sqft,
    price_per_night: req.body.price_per_night
  });

  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get single hotel
router.get('/:id', getHotel, (req, res) => {
  res.json(res.hotel);
});

// Delete hotel
router.delete('/:id', getHotel, async (req, res) => {
  try {
    await res.hotel.remove();
    res.json({ message: 'Hotel deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get hotel by ID
async function getHotel(req, res, next) {
  let hotel;
  try {
    hotel = await Hotel.findById(req.params.id);
    if (hotel == null) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.hotel = hotel;
  next();
}

module.exports = router;