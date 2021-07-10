/* eslint-disable class-methods-use-this */
const Database = require('../database');

const db = new Database().start();

module.exports = {
  // Get methods 7 - 92

  async getAllLessons(req, res) {
    const lesson = (await db).lessons.findAll();
    res.send(await lesson);
  },

  async getLessonsById(req, res) {
    const { id } = req.params;
    const lesson = (await db).lessons.findOne({ _id: id });
    res.send(await lesson);
  },

  async createLessons(req, res) {
    const lesson = (await db).lessons.add(req.body);
    res.send(await lesson);
  },

  async removeLessons(req, res) {
    const { id } = req.params;
    const lesson = (await db).lessons.findByIdAndRemove({ _id: id });
    res.send(lesson);
  },
};
