/* eslint-disable no-undef */
import mongoose from 'mongoose';
import {
  MessagesSchema,
  UserSchema,
  LessonsSchema,
  ContentSchema,
  ClassesSchema
} from './schemas/index';

class MongoDB {
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
    await mongoose
      .connect(process.env.MONGODB_URI, this.options)
      .then((MongoDB) => this.loadSchemas(MongoDB))
  }
  async loadSchemas(MongoDB) {
    this.classes = new ClassesSchema(MongoDB);
    this.users = new UserSchema(MongoDB);
    this.lessons = new LessonsSchema(MongoDB);
    this.messages = new MessagesSchema(MongoDB);
    this.content = new ContentSchema(MongoDB);
  }

};

export default MongoDB;
