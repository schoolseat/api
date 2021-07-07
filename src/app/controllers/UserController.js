/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const Database = require('../database');

const db = new Database().start();

module.exports = {
  async getAllUsers(req, res) {
    const users = (await db).users.findAll();
    return res.send(await users);
  },

  async getUserById(req, res) {
    const { id } = req.params;
    const users = (await db).users.findOne({ _id: id });
    return res.send(await users);
  },

  async createUser(req, res) {
    const users = (await db).users.add(req.body);
    return res.send(await users);
  },

  async removeUser(req, res) {
    const { id } = req.params;
    const users = (await db).users.findByIdAndRemove({ _id: id });
    return res.send(await users);
  },
/*
  async updateUser(user, {
    classes, nickname, name, bio, email, password, profilePic, level, xp,
  }) {
    const update = async (value) => (await db).users.update(user._id, value);
    if (classes) {
      return update({ $set: { classes } });
    }
    if (nickname) {
      return update({ $set: { nickname } });
    }
    if (name) {
      return update({ $set: { name } });
    }
    if (bio) {
      return update({ $set: { bio } });
    }
    if (email) {
      return update({ $set: { email } });
    }
    if (password) {
      return update({ $set: { password } });
    }
    if (profilePic) {
      return update({ $set: { profilePic } });
    }
    if (level) {
      return update({ $set: { level } });
    }
    if (xp) {
      return update({ $set: { xp } });
    }
    if (
      !classes
        && !nickname
        && !name
        && !bio
        && !email
        && !password
        && !profilePic
        && !level
        && !xp
    ) {
      throw new Error('tu esqueceu os parametro burro');
    } else {
      return (await db).users.findById(user.id);
    }
  },
  */
};
