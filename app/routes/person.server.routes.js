module.exports = function(app) {
  var peopleController = require('../controllers/people.server.controller');

  // restful PEOPLE routes

  app.get('/people', peopleController.index);
 };
