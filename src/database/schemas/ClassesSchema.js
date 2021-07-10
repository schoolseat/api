const { Schema } = require('mongoose');

const { timestampOpts } = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: String,
  class: String,
  discipline: String,
  icon: String,
  color: String,
  bio: String,
  teacher: Object,
  school: Object,
  lessons: Array,
  users: Array,
  content: Array,
}, timestampOpts);
