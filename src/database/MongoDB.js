/* eslint-disable no-undef */
const mongoose = require('mongoose');
const {
    ClassesRepository, 
    UserRepository, 
    LessonsRepository, 
    MessagesRepository,
    ContentRepository
} = require('./repositories');

module.exports = class MongoDB {
  constructor(options = {}) {
    this.options = options;
  }

  async connect() {
    return mongoose
      .connect(process.env.MONGODB_URI, this.options)
      .then((mongo) => this.loadSchemas(mongo));
  }

  async loadSchemas(mongo) {
    this.classes = new ClassesRepository(mongo);
    this.users = new UserRepository(mongo);
    this.lessons = new LessonsRepository(mongo);
    this.messages = new MessagesRepository(mongo);
    this.content = new ContentRepository(mongo);
  }
};
