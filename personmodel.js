const mongoose = require("mongoose");
const { Schema } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: String,
  age: Number,
  favouretfood: [String],
});
 const personModel= mongoose.model('person',personSchema);
 module.exports = personModel;
