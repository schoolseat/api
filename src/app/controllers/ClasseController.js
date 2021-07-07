/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const Database = require('../database');

const db = new Database().start();

module.exports = {
  async getAllClasses(req, res) {
    const classes = (await db).classes.findAll();
    res.send(await classes);
  },

  async getClassesById(req, res) {
    const { id } = req.params;
    const classes = (await db).classes.findOne({ _id: id });
    res.send(await classes);
  },

  async createClasses(req, res) {
    const classes = (await db).classes.add(req.body);
    res.send(await classes);
  },

  // parece q n tá funcionano
  async removeClasses(req, res) {
    const { id } = req.params;
    const classes = (await db).classes.findByIdAndRemove({ _id: id });
    res.send(await classes);
  },
/*
  async updateClasse(classe, {
    lesson, content, discipline, icon, color, bio, users,
  }) {
    const update = async (value) => (await db).classes.update(classe.id, value);
    if (lesson) {
      return update({ $set: { lesson } });
    }
    if (content) {
      return update({ $set: { content } });
    }
    if (discipline) {
      return update({ $set: { discipline } });
    }
    if (icon) {
      return update({ $set: { icon } });
    }
    if (color) {
      return update({ $set: { color } });
    }
    if (bio) {
      return update({ $set: { bio } });
    }
    if (users) {
      return update({ $set: { users } });
    }
    if (
      !lesson
        && !content
         && !discipline
         && !icon
         && !color
         && !bio
         && !users
    ) {
      throw new Error('tu esqueceu os parametro burro');
    } else {
      return (await db).classes.findById(classe.id);
    }
  },
  */
};
