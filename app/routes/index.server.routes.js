module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  // COMBINE ALL CONTROLLERS INTO ONE
  var staticPageController = require('../controllers/staticpage.server.controller');

  // ACTUAL ROUTING
  // static page routes
  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);

  app.get('/error', function(req, res) {
    res.status(404)
       .sendFile(__dirname + '/public/404.html');
  });

 };
