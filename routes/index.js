module.exports = (router) => {
  router.prefix('/v1');
  router.use('/thermostat', require('./thermostat'))
};
