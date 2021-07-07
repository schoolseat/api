/* eslint-disable class-methods-use-this */
const Database = require('../database');

const db = new Database().start();

module.exports = {
  async getAllMessages(req, res) {
    const messages = (await db).messages.findAll();
    return res.send(await messages);
  },

  async getMessagesById(req, res) {
    const { id } = req.params;
    const messages = (await db).messages.findOne({ _id: id });
    return res.send(await messages);
  },

  async createMessages(req, res) {
    const messages = (await db).messages.add(req.body);
    return res.send(await messages);
  },

  async removeMessages(req, res) {
    const { id } = req.params;
    const messages = (await db).messages.findByIdAndRemove({ _id: id });
    return res.send(await messages);
  },
};
