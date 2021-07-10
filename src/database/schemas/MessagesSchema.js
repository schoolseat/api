const { Schema } = require('mongoose');

const { timestampOpts } = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: String,
  author: Object,
  to: String,
  content: String,
/*
  attachments: Object
  reactions: Object,
  reference: String
 */
}, timestampOpts);
