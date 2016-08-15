module.exports = function(app) {
  var usersController = require('../controllers/users.server.controller');


  // restful USER routes
  app.get('/users/new', usersController.new)

  app.route('/users')
      .get(usersController.index)
      .post(usersController.create);

  app.route('/users/:user_id')
      .get(usersController.show)
      .put(usersController.update)
      .delete(usersController.delete);

  app.param('user_id', usersController.user_by_id);
 };
