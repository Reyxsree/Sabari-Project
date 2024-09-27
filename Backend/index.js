const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/carpooling', { useNewUrlParser: true, useUnifiedTopology: true });

const hostSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  vehicleType: String,
  vehicleModel: String,
});

const coTravelerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  location: String,
  preferences: String,
});

const Host = mongoose.model('Host', hostSchema);
const CoTraveler = mongoose.model('CoTraveler', coTravelerSchema);

app.post('/register-host', (req, res) => {
  const host = new Host(req.body);
  host.save().then(() => res.json({ message: 'Host Registered!' }));
});

app.post('/register-cotraveler', (req, res) => {
  const cotraveler = new CoTraveler(req.body);
  cotraveler.save().then(() => res.json({ message: 'Co-Traveler Registered!' }));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
