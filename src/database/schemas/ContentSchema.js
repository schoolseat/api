const { Schema } = require('mongoose');

const { 
  defaultString,
  defaultDate
} = require('../../utils/schemaUtils');


module.exports = new Schema({
  title: defaultString,
  createdAt: defaultDate,
  content: defaultString,
  text: defaultString,
});
