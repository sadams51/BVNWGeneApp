var models = require("../../app/models");

var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {

	app.get('/login', authController.login);

}

