const { Schema } = require('mongoose');

const { 
  defaultString, 
  defaultDate,
  defaultObject,
  defaultId
} = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: defaultId,
  author: defaultObject,
  to: defaultString,
  timestamp: defaultDate,
  content: defaultString,
/*
  attachments: Object
  reactions: Object,
  reference: String
 */
});
