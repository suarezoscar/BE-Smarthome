const Router = require('koa-router');
const router = new Router();
const Ctrl = require('../controllers/thermostat');

//Get methods
router.get('/', Ctrl.getThermostat);
router.get('/current', Ctrl.getCurrentTemp);
router.get('/status', Ctrl.getCurrentStatus);
router.get('/trigger',Ctrl.getTriggerTemp);

//Put Methods
router.put('/current/:temp', Ctrl.setCurrentTemp);
router.put('/status/:status', Ctrl.setStatus);
router.put('/trigger/:temp', Ctrl.setTriggerTemp);


module.exports = router.routes();
