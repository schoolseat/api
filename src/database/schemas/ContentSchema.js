const { Schema } = require('mongoose');

const { 
  defaultString,
  defaultDate,
  defaultId
} = require('../../utils/schemaUtils');


module.exports = new Schema({
  _id: defaultId,
  title: defaultString,
  createdAt: defaultDate,
  content: defaultString,
  text: defaultString,
});
