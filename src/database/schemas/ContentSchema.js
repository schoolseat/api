const { Schema } = require('mongoose');

const { timestampOpts } = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: String,
  title: String,
  content: String,
  text: String,
  classe: Object,
}, timestampOpts);
