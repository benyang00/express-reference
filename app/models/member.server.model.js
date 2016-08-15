var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var memberSchema = new Schema({
  name: String,
  email: String
});

mongoose.model('Member', memberSchema);
