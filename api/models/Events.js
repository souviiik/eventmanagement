const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventsSchema = new Schema({
  name: { type: String, required: true, min: [3, 'Name should be more than 3 characters'],
    max: [24, 'Name should be less than 24 characters'] },
  type: { type: String, required: true },
  length: { type: Number, required: true, min: [10, 'Length should be more than 10 mins'],
    max: [1000, 'Length should be less than 1000 mins'] },
  views: { type: Number, default:0, required: true },
  cost: { type: Number, default:0, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Events', EventsSchema);