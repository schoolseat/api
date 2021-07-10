/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const Database = require('../database');

const db = new Database().start();

module.exports = {
  async getAllContent(req, res) {
    const content = (await db).content.findAll();
    res.send(await content);
  },
  async getContentById(req, res) {
    const { id } = req.params;
    const content = (await db).content.findOne({ _id: id });
    res.send(await content);
  },
  async createContent(req, res) {
    const content = (await db).content.add(req.body);
    res.send(await content);
  },
  async removeContent(req, res) {
    const { id } = req.params;
    const content = (await db).content.findByIdAndRemove({ _id: id });
    res.send(content);
  },
};
