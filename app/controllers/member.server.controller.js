var Member = require('mongoose').model('Member');

module.exports = {
  index: function(req, res, next) {
    Member.find({}, function(err, members) {
      if (err) return next(err);
      res.status(404);
      res.json(members);
    });
  },
  create: function(req, res) {
    res.send('create new member');
  },
  show: function(req, res) {
    res.send('show member details by id');
  },
  update: function(req, res) {
    res.send('update member detail, query by id');
  },
  destroy: function(req, res) {
    res.send('destroy member, query by id')
  }
}
