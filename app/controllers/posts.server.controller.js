var Post = require('mongoose').model('Post');
var User = require('mongoose').model('User');

module.exports = {
  index: function(req, res, next) {
    Post.find({}, function(err, posts) {
      if (err) return next(err);

      res.json(posts);
    });
  },
  create: function(req, res, next) {
    var user = new User();
    user.save();
    var post = new Post(req.body);
    post.author = user;

    post.save(function(err) {
      if (err) return next(err);

      res.json(post);
    });
  }
}
