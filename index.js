require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./connection/Connection")
const hotelRoutes = require("./routes/hotels.routes")

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
db();


// Routes
app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});