const mongoose = require('mongoose');

const offenseSchema = new mongoose.Schema({
    name: String,
    penalCode: String,
    bailEligibility: Boolean
});

module.exports = mongoose.model('Offense', offenseSchema);
