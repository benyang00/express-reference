var User = require('mongoose').model('User');

module.exports = {
  index: function(req, res, next) {
    // res.json([
    //   {
    //     name: 'junius',
    //     age: 26,
    //     email: 'junius@gmail.com'
    //   },
    //   {
    //     name: 'junius2',
    //     age: 27,
    //     email: 'junius2@gmail.com'
    //   },
    // ]);

    User.find({}, function(err, users) {
      if (err) return next(err);

      res.json(users);
    });
  },
  new: function(req, res) {
    res.render('users/new', {
      title: 'Registration Page'
    });
  },
  create: function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
      if (err) return next(err);

      res.json(user);
    });
  },
  show: function(req, res) {
    res.json(req.user);
  },
  update: function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
      if (err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
  },
  delete: function(req, res, next) {
    req.user.remove(function(err) {
      if(err) return next(err);

      res.json(req.user);
    });
  },
  user_by_id: function(req, res, next, id) {
    User.findOne({
        _id: id
      }, 'firstName lastName',
      function(err, user) {
        if (err) {
          return next(err);
        } else {
          req.user = user;
          next();
        }
      });
  }
}
