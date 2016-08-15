var People = require('mongoose').model('People');

module.exports = {
  index: function(req, res, next) {
    People.find({ age: { $gt: 30} }, 'name age', function(err, people) {
      if(err) return next(err);

      res.json(people);
    });
  }
}
