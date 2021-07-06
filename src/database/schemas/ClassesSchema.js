const { Schema } = require('mongoose');

const {
  defaultString,
  defaultArray,
  defaultDate,
  defaultObject,
  defaultId,
} = require('../../utils/schemaUtils');

module.exports = new Schema({
  _id: defaultId,
  class: defaultString,
  discipline: defaultString,
  icon: defaultString,
  color: defaultString,
  bio: defaultString,
  teacher: defaultObject,
  school: defaultObject,
  lessons: defaultArray,
  users: defaultArray,
  content: defaultArray,
  createdAt: defaultDate,
});
