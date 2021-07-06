const { Schema } = require('mongoose');

const {
  defaultString,
  defaultDate,
  defaultId,
} = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: defaultId,
  deadLine: defaultDate,
  timestamp: defaultDate,
  title: defaultString,
  content: defaultString,
  text: defaultString,
  activityLink: defaultString,
});
