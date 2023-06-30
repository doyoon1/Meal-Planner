//import mongoose to create new schema
const mongoose = require("mongoose");

//create schema
const GroceryItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

//export the schema
module.exports = mongoose.model("todo", GroceryItemSchema);
