module.exports = function(app) {
  var postsController = require('../controllers/posts.server.controller');

  app.route('/posts')
      .get(postsController.index)
      .post(postsController.create);
 };
