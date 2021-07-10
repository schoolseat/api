const { Schema } = require('mongoose');

const { timestampOpts } = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: String,
  password: String,
  email: String,
  name: String,
  nickname: String,
  profilePic: String,
  bornDate: String,
  bio: String,
  stars: String,
  level: String,
  xp: String,
  classes: Array,
}, timestampOpts);
