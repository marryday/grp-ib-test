const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  ageLimit: String,
  duration: String,
  price: Number,
  location: String,
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
