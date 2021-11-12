const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  pages: Number,
  authorID: String,
});

module.exports = mongoose.model("Book", bookSchema);
