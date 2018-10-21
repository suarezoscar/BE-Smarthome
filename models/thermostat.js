const mongoose = require('mongoose');

const ThermostatSchema = new mongoose.Schema(
  {
    isActive: {type: Boolean},
    currentTemp: {type: Number},
    triggerTemp: {type: Number}
  },
  {timestamps: true}
);

module.exports = mongoose.model('Thermostat', ThermostatSchema);
