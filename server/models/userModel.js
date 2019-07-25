const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String,
  fullname: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model("User", userSchema);
