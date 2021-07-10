/* eslint-disable no-undef */
import mongoose from 'mongoose';

import {
  User,
  Lesson,
  Classe,
  Content,
  Message
} from '../utils/schemaUtils';

import {
  MessagesSchema,
  UserSchema,
  LessonsSchema,
  ContentSchema,
  ClassesSchema
} from './schemas';

interface Methods {
  findAll(): Object;
  findOne(String): Object;
  add(Object): Object;
  findByIdAndRemove(String): Object;
}
interface Data {
  users: Methods;
  content: Methods;
  classes: Methods;
  messages: Methods;
  lessons: Methods;
  connect: Function;
}

export default function MongoDB(options: Object):Data {

  async function connect() {
    return mongoose
      .connect(process.env.MONGODB_URI, options)
      .then(() => loadSchemas());
  }

  async function loadSchemas() {
    mongoose.model<User>('user', UserSchema);
    mongoose.model<Lesson>('lessons', LessonsSchema);
    mongoose.model<Classe>('classes', ClassesSchema);
    mongoose.model<Content>('content', ContentSchema);
    mongoose.model<Message>('messages', MessagesSchema);
  }
};
