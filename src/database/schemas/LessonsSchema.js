const { Schema } = require('mongoose');

const { 
  defaultString, 
  defaultDate
} = require('../../utils/schemaUtils');


module.exports = new Schema({
  deadLine: defaultDate,
  timestamp: defaultDate,
  title: defaultString,
  content: defaultString,
  text: defaultString,
  activityLink: defaultString,
});
