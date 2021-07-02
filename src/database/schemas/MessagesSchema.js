const { Schema } = require('mongoose');

const { 
  defaultString, 
  defaultDate,
  defaultObject
} = require('../../utils/schemaUtils');

module.exports = new Schema({
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
