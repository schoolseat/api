const { Schema } = require('mongoose');

const { 
  defaultString, 
  defaultArray,
  defaultDate,
  defaultId
} = require('../../utils/schemaUtils');

module.exports = new Schema({
  id: defaultId,
  password: defaultString,
  email: defaultString,
  name: defaultString,
  nickname: defaultString,
  profilePic: defaultString,
  bornDate: defaultString,
  bio: defaultString,
  stars: defaultString,
  level: defaultString,
  xp: defaultString,
  classes: defaultArray,
  createdAt: defaultDate,
});
