module.exports = function(app) {
  var membersController = require('../controllers/member.server.controller');

  // new way
  app.route('/members')
      .get(membersController.index)
      .post(membersController.create);

  app.route('/members/:id')
      .get(membersController.show)
      .put(membersController.update)
      .delete(membersController.destroy);

  // unnecessary routes
  // app.get('/members/:id/edit', membersController.edit);
  // app.get('/members/new', membersController.new);
  //
  // // old way
  // app.get('/members', membersController.index);
  // app.get('/members/:id' membersController.show);
  // app.post('/members', membersController.create);
  // app.put('/members/:id', membersController.update);
  // app.delete('/members/:id', membersController.destroy);
}
