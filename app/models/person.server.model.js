var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  age: Number
});

mongoose.model('People', PersonSchema);
