const Thermostat = require('../models/thermostat');
const DEFAULT_ID = "5bcca7c8d54cb52cb0cd8d7c";

//********* GET METHODS **************//
async function getThermostat(ctx) {
  ctx.body = await Thermostat.findById(DEFAULT_ID);
}

async function getCurrentTemp(ctx) {
  let res = await Thermostat.findById(DEFAULT_ID);
  ctx.body = res.currentTemp;
};

const getCurrentStatus = async (ctx) => {
  let res = await Thermostat.findById(DEFAULT_ID);
  ctx.body = res.isActive;
};

const getTriggerTemp = async (ctx) => {
  let res = await Thermostat.findById(DEFAULT_ID);
  ctx.body = res.triggerTemp;
};

//********* PUT METHODS **************//
async function setTriggerTemp(ctx) {
  const thermostat = await Thermostat.findById(DEFAULT_ID);
  thermostat.triggerTemp = ctx.params.temp;
  ctx.body = await thermostat.save();
}

async function setCurrentTemp(ctx) {
  const thermostat = await Thermostat.findById(DEFAULT_ID);
  thermostat.currentTemp = ctx.params.temp;
  ctx.body = await thermostat.save();
}

async function setStatus(ctx) {
  const thermostat = await Thermostat.findById(DEFAULT_ID);
  thermostat.isActive = ctx.params.status;
  ctx.body = await thermostat.save();
}

//********* EXPORT METHODS **************//
module.exports = {
  getThermostat,
  getCurrentStatus,
  getCurrentTemp,
  getTriggerTemp,
  setStatus,
  setCurrentTemp,
  setTriggerTemp
};
