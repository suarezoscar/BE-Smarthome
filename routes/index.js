module.exports = (router) => {
  router.prefix('/v1');
  router.use('/', require('./thermostat'))
};
