const { Schema } = require('mongoose');

const { 
  defaultString, 
  defaultArray,
  defaultDate,
  defaultObject
} = require('../../utils/schemaUtils');


module.exports = new Schema({
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
