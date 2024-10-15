// models/Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  linkedin: { type: String, required: true },
  twitter: { type: String, required: true },
  interests: { type: [String], required: true },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
