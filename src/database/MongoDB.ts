/* eslint-disable no-undef */
import Mongo from 'mongoose';

import * as Schemas from './schemas/index';

export default class MongoDB {
  options: Object;
  classes: Object;
  users: Object;
  lessons: Object;
  messages: Object;
  content: Object;

  constructor(options: Object = {}) {
    this.options = options;
  }
  async connect() {
    await Mongo
      .connect(process.env.MONGODB_URI, this.options)
      .then((MongoDB) => this.loadSchemas(MongoDB))
  }
  async loadSchemas(MongoDB) {
    this.classes = new Schemas.ClassesSchema(MongoDB);
    this.users = new Schemas.UserSchema(MongoDB);
    this.lessons = new Schemas.LessonsSchema(MongoDB);
    this.messages = new Schemas.MessagesSchema(MongoDB);
    this.content = new Schemas.ContentSchema(MongoDB);
  }
};
