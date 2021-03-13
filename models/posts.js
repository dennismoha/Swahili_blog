const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String, required: true },
  imageUrl: { type: String },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, //referencing user
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" }, //referencing category
});

module.exports = mongoose.model("posts", postSchema);