const { Schema } = require('mongoose');

const { timestampOpts } = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: String,
  deadline: Date,
  title: String,
  content: String,
  text: String,
  activityLink: String,
}, timestampOpts);
