var express = require('express');
var router = express.Router();
var EventController = require('./controllers/EventController');

//routes go here
router.route('/event').get(EventController.makeEvent);

module.exports = router;